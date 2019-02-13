import * as apiData from './api.data';

const api = {
  searchCustomers: searchString => delay(500).then(() => apiData.searchCustomers(searchString)),
  getCustomer: id => delay(500).then(() => apiData.getCustomer(id)),
  searchItems: searchString => delay(500).then(() => apiData.searchItems(searchString)),
  saveCustomer: customerInfo => delay(500).then(() => apiData.saveCustomer(customerInfo)),
  saveOrder: orderData => delay(500).then(() => apiData.saveOrder(orderData))
};

export default api;

/**
 * Simulates a delay from the server for dev api calls
 * @param ms {number} time delay in milliseconds
 * @returns {Promise<any>}
 */
function delay(ms = 1500) {
  return new Promise(resolve => setTimeout(resolve, ms))
}