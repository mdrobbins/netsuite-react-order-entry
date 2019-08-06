/**
 * @NApiVersion 2.0
 * @NScriptType Restlet
 * @NModuleScope Public
 */
define(['N/log', 'N/search', 'N/runtime', 'N/util', 'N/record', './safeExecute', './timer'],
  function (log, search, runtime, util, record, safeExecute, Timer) {
    function post(request) {
      var timer = new Timer();
      var response = {};
      switch (request.action) {
        case 'searchCustomers':
          response = safeExecute(getCustomers, request.searchText);
          break;

        case 'getCustomer':
          response = safeExecute(getCustomerDetail, request.customerId);
          break;

        case 'saveCustomer':
          response = safeExecute(saveCustomer, request);
          break;

        case 'searchItems':
          response = safeExecute(searchItems, request.searchText);
          break;

        case 'saveOrder':
          response = safeExecute(saveOrder, request.orderData);
          break;

        default:
          response = {
            isSuccess: false,
            message: 'Invalid action ' + request.action
          };
          break;
      }

      if (Array.isArray(response.result)) {
        response.totalCount = response.result.length;
      }

      response.elapsedSeconds = timer.getElapsedSeconds();
      response.remainingUsage = runtime.getCurrentScript().getRemainingUsage();

      return response;

      ////////////////////////////////////////

      function saveOrder(orderData) {
        var salesOrder = record.create({
          type: 'salesorder',
          isDynamic: true
        });

        salesOrder.setValue({ fieldId: 'entity', value: orderData.customerId });
        salesOrder.setValue({ fieldId: 'otherrefnum', value: orderData.poNumber });
        salesOrder.setText({ fieldId: 'shipcarrier', value: 'More' });

        orderData.items.forEach(function (item) {
          salesOrder.selectNewLine({ sublistId: 'item' });
          salesOrder.setCurrentSublistValue({ sublistId: 'item', fieldId: 'item', value: item.id });
          salesOrder.setCurrentSublistValue({ sublistId: 'item', fieldId: 'quantity', value: item.quantity });
          salesOrder.setCurrentSublistValue({ sublistId: 'item', fieldId: 'rate', value: item.rate });
          salesOrder.setCurrentSublistValue({ sublistId: 'item', fieldId: 'taxcode', value: -146 });
          salesOrder.commitLine({ sublistId: 'item' });
        });

        var save = safeExecute(salesOrder.save);
        if (save.isSuccess) {
          var so = record.load({ type: 'salesorder', id: save.result.toString() });
          salesOrder.setValue({ fieldId: 'shipaddresslist', value: orderData.shippingAddress });
          return so.save();
        }
      }

      function searchItems(searchText) {
        var results = search.create({
          type: 'item',
          filters: [
            ['isinactive', 'is', 'F'],
            'and', ['inventorylocation', 'anyof', 1],
            'and', ['locationquantityavailable', 'greaterthan', 0],
            'and', [['itemid', 'contains', searchText], 'or', ['salesdescription', 'contains', searchText]]
          ],
          columns: [
            'itemid',
            'salesdescription',
            'baseprice',
            'locationquantityavailable',
            'imageurl'
          ]
        }).run().getRange({ start: 0, end: 1000 });

        return (results || []).map(function (result) {
          var itemId = Number(result.id);
          return {
            id: itemId,
            number: result.getValue('itemid'),
            description: result.getValue('salesdescription'),
            rate: Number(result.getValue('baseprice')) || 0,
            quantityAvailable: Number(result.getValue('locationquantityavailable')) || 0,
            imageUrl: result.getValue('imageurl')
          };
        });
      }

      function saveCustomer(data) {
        var values = {
          'companyname': data.companyName,
          'email': data.email,
          'phone': data.phone,
          'comments': data.comments
        };

        return record.submitFields({
          type: 'customer',
          id: data.customerId,
          values: values,
          options: {
            ignoreMandatoryFields: true
          }
        });
      }

      function getCustomerDetail(customerId) {
        var customer = getCustomer(customerId);
        customer.orders = getCustomerOrders(customerId);
        return customer;
      }

      function getCustomerOrders(customerId) {
        var results = search.create({
          type: 'salesorder',
          filters: [
            ['mainline', 'is', 'T'],
            'and', ['name', 'anyof', customerId]
          ],
          columns: [
            'tranid',
            'trandate',
            'status',
            'amount'
          ]
        }).run().getRange({ start: 0, end: 1000 });

        return (results || []).map(function (result) {
          return {
            id: Number(result.id),
            number: result.getValue('tranid'),
            date: result.getValue('trandate'),
            status: result.getText('status'),
            total: Number(result.getValue('amount'))
          };
        });
      }

      function getCustomer(customerId) {
        var results = search.create({
          type: 'customer',
          filters: [
            ['isinactive', 'is', 'F'],
            'and', ['internalid', 'anyof', customerId]
          ],
          columns: [
            'entityid',
            'companyname',
            'email',
            'phone',
            'comments',
            'balance',
            'daysoverdue',
            'address.addressinternalid',
            'address.addresslabel'
          ]
        }).run().getRange({ start: 0, end: 1000 });

        return (results || []).reduce(function (acc, result) {
          acc = util.extend(acc, {
            id: Number(result.id),
            number: result.getValue('entityid'),
            companyName: result.getValue('companyname'),
            email: result.getValue('email'),
            phone: result.getValue('phone'),
            comments: result.getValue('comments'),
            balance: Number(result.getValue('balance')),
            daysOverdue: Number(result.getValue('daysoverdue'))
          });

          acc.addresses = acc.addresses || [];
          acc.addresses.push({
            id: result.getValue({ name: 'addressinternalid', join: 'address' }),
            label: result.getValue({ name: 'addresslabel', join: 'address' })
          });

          return acc;
        }, {});
      }

      function getCustomers(searchText) {
        var results = search.create({
          type: 'customer',
          filters: [
            ['isinactive', 'is', 'F'],
            'and', [['companyname', 'contains', searchText],
              'or', ['entityid', 'contains', searchText],
              'or', ['email', 'contains', searchText],
              'or', ["formulatext: REGEXP_REPLACE({phone}, '\\D')", 'contains', searchText]]
          ],
          columns: [
            'entityid',
            search.createColumn({ name: 'companyname', sort: search.Sort.ASC }),
            'companyname',
            'email',
            'phone'
          ]
        }).run().getRange({ start: 0, end: 1000 });

        return (results || []).map(function (result) {
          return {
            id: Number(result.id),
            number: result.getValue('entityid'),
            companyName: result.getValue('companyname'),
            email: result.getValue('email'),
            phone: result.getValue('phone')
          };
        });
      }
    }

    return {
      post: post
    };
  });
