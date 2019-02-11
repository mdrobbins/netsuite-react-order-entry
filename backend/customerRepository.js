/**
 * @NApiVersion 2.0
 * @NModuleScope Public
 */
define(['N/log', './dataRepository'], function (log, dataRepository) {
  function customerRepository() {
    var repo = {
      map: {
        'externalid': 'externalId',
        'phoneNumber': 'phone'
      }
    }
    repo.__proto__ = dataRepository;

    return repo;
  }

  return customerRepository();
});