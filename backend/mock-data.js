/* eslint-disable import/no-amd */
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

  var itemResults = search.create({
    type: 'item',
    filters: [
      ['isinactive', 'is', 'F'],
      'and', ['inventorylocation', 'anyof', 1],
      'and', ['locationquantityavailable', 'greaterthan', 0]
    ],
    columns: [
      'itemid',
      'salesdescription',
      'baseprice',
      'locationquantityavailable'
    ]
  }).run().getRange({ start: 0, end: 1000 });

  var itemData = itemResults.map(function (result) {
    return {
      id: Number(result.id),
      number: result.getValue('itemid'),
      description: result.getValue('salesdescription'),
      rate: Number(result.getValue('baseprice')) || 0,
      quantityAvailable: Number(result.getValue('locationquantityavailable')) || 0,
      imageUrl: '/images/bowcaster.png'
    };
  });

  log.debug('test', itemData);
  log.debug('test', customerData);
});