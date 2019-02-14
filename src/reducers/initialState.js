export default {
  customer: {
    activeTab: 'results',
    currentCustomer: {},
    customerSearchResults: [],
    recentCustomers: [],
    searchText: ''
  },
  order: {
    poNumber: '',
    shippingAddress: 1,
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