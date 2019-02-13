/**
 * @NApiVersion 2.0
 * @NScriptType Restlet
 * @NModuleScope Public
 */
define(['N/log', 'N/search', 'N/runtime', 'N/util', './safeExecute', './timer'],
  function (log, search, runtime, util, safeExecute, Timer) {
    function post(request) {
      var timer = new Timer();
      var response = {};
      switch (request.action) {
        case 'searchCustomers':
          response = safeExecute(getCustomers, request.searchText);
          break;

        case 'getCustomerDetail':
          response = safeExecute(getCustomerDetail, request.customerId);
          break;

        case 'getCustomer':
          response = safeExecute(getCustomer, request.customerId);
          break;

        case 'getCustomerOrders':
          response = safeExecute(getCustomerOrders, request.customerId);
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
            'address.internalid',
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
            id: result.getValue({ name: 'internalid', join: 'address' }),
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