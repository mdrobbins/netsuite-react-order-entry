export default {
  customer: {
    activeTab: 'results',
    currentCustomer: {},
    customerSearchResults: [],
    recentCustomers: [],
    searchText: ''
  },
  order: {
    customerPO: '',
    shippingAddress: 1,
    items: [],
  },
  item: {
    searchText: '',
    itemSearchResults: []
  },
  navigation: {
  },
  ajax: {
    callsInProgress: 0,
    loadingText: 'Loading'
  }
};