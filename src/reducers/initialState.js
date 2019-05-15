export default {
  companyName: window.nsCompanyName || 'Company Name',
  customer: {
    activeTab: 'results',
    currentCustomer: {},
    customerSearchResults: [],
    recentCustomers: [],
    searchText: ''
  },
  order: {
    poNumber: '',
    shippingAddress: null,
    items: [],
  },
  item: {
    searchText: '',
    itemSearchResults: []
  },
  ajax: {
    callsInProgress: 0,
    loadingText: 'Loading'
  }
};
