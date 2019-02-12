/**
 * @NApiVersion 2.0
 * @NScriptType Restlet
 * @NModuleScope Public
 */
define(['N/log', 'N/search', 'N/runtime', './safeExecute', './timer'],
  function (log, search, runtime, safeExecute, Timer) {
    function post(request) {
      var timer = new Timer();
      var response = {};
      switch (request.action) {
        case 'searchCustomers':
          response = safeExecute(getCustomers, request.searchText);
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