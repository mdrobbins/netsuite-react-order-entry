require(['N/log', 'N/search'], function(log, search) {
  // noinspection ES6ConvertVarToLetConst
  var results = search.create({
    type: 'customer',
    filters: [
      ['isinactive', 'is', 'F']
    ],
    columns: [
      'entityid',
      'companyname',
      'email',
      'phone'
    ]
  }).run().getRange({ start: 0, end: 1000 });

  // noinspection ES6ConvertVarToLetConst
  var customerData = results.map(function(result) {
    return {
      id: Number(result.id),
      number: result.getValue('entityid'),
      companyName: result.getValue('companyname'),
      email: result.getValue('email'),
      phone: result.getValue('phone')
    };
  });

  log.debug('test', customerData);
});