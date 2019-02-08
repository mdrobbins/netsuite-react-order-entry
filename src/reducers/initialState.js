export default {
  customer: {
    activeTab: 'results',
    currentCustomer: {
      id: 968,
      number: 'CUS00000469',
      companyName: 'DataTek Software',
      email: 'mikedrobbins@gmail.com',
      phone: '8587742746',
      comments: 'This is a test comment',
      balance: 12345.67,
      daysoverdue: 45,
      salesRep: {
        id: -5,
        name: 'Mike Robbins'
      },
      orders: [
        {
          id: 944,
          number: 'SO0000179',
          date: '6/30/2012',
          status: 'Billed',
          total: 10255.31,
          trackingNumbers: []
        },
        {
          id: 901,
          number: 'SO0000279',
          date: '6/13/2012',
          status: 'Pending Fulfillment',
          total: 1147.15,
          trackingNumbers: [
            '1ZYA95390396319198',
            '1ZYA95390398888981'
          ]
        }
      ]
    },
    customerSearchResults: [],
    recentCustomers: [],
    searchText: ''
  },
  order: {
    customerPO: '',
    shippingAddress: 1,
    items: [{
      id: 1,
      number: 'ITM00001',
      quantity: 10,
      rate: 100
    }],
  },
  item: {
    searchText: '',
    itemSearchResults: [{
      id: 1,
      number: 'ITM00001',
      description: 'This is the description of the item',
      quantityAvailable: 100,
      rate: 100,
      quantity: '',
      imageUrl: '/images/bowcaster.png'
    }, {
      id: 2,
      number: 'ITM00002',
      description: 'This is the description of the item',
      quantityAvailable: 100,
      rate: 100,
      quantity: '',
      imageUrl: '/images/bowcaster.png'
    }, {
      id: 3,
      number: 'ITM00003',
      description: 'This is the description of the item',
      quantityAvailable: 100,
      rate: 100,
      quantity: '',
      imageUrl: '/images/bowcaster.png'
    }]
  },
  navigation: {
  },
  ajax: {
    callsInProgress: 0,
    loadintText: 'Loading'
  }
};