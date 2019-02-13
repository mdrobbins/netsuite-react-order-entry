const api = {
  salesOrderApi: '/app/site/hosting/restlet.nl?script=66&deploy=1',

  searchCustomers: function (searchText) {
    const data = { action: 'searchCustomers', searchText };
    return this.makeAjaxCall(this.salesOrderApi, data);
  },

  getCustomer: function (customerId) {
    const data = { action: 'getCustomer', customerId };
    return this.makeAjaxCall(this.salesOrderApi, data);
  },

  saveCustomer: function (customerInfo) {
    const data = {
      action: 'saveCustomer',
      customerId: customerInfo.customerId,
      companyName: customerInfo.companyName,
      email: customerInfo.email,
      phone: customerInfo.phone,
      comments: customerInfo.comments
    };
    return this.makeAjaxCall(this.salesOrderApi, data);
  },

  searchItems: function (searchText) {
    const data = { action: 'searchItems', searchText };
    return this.makeAjaxCall(this.salesOrderApi, data);
  },

  saveOrder: function (orderData) {
    const data = { action: 'saveOrder', orderData };
    return this.makeAjaxCall(this.salesOrderApi, data);
  },

  makeAjaxCall: function (url, data) {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    });
  }
};

export default api;