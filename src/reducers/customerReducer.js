import initalState from './initialState';
import * as actions from '../actions/actionTypes';

const customerReducer = (state = initalState.customer, action) => {
  switch(action.type) {
    case actions.SEARCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        searchText: '',
        activeTab: 'results',
        customerSearchResults: action.customers
      };

    case actions.SEARCH_TEXT_CHANGED:
      return {
        ...state,
        searchText: action.searchText
      };

    case actions.CUSTOMER_EDIT_BUTTON_CLICKED: {
      const clickedCustomer = action.customerList.find(c => c.id === action.customerId);
      const recentCustomers = state.recentCustomers.filter(c => c.id !== action.customerId).slice(0, 9);
      recentCustomers.unshift(clickedCustomer);
      localStorage.setItem('recentCustomers', JSON.stringify(recentCustomers));

      return {
        ...state,
        recentCustomers
      };
    }

    case actions.CUSTOMER_SEARCH_TAB_CHANGED:
      return {
        ...state,
        activeTab: action.activeTab
      };

    case actions.GET_RECENT_CUSTOMERS: {
      let recentCustomers = localStorage.getItem('recentCustomers');
      if (!recentCustomers) return state;
      return {
        ...state,
        recentCustomers: JSON.parse(recentCustomers)
      };
    }

    case actions.CLEAR_RECENT_CUSTOMERS: {
      localStorage.removeItem('recentCustomers');
      return {
        ...state,
        recentCustomers: []
      };
    }

    case actions.GET_CUSTOMER_SUCCESS: {
      return {
        ...state,
        currentCustomer: action.customer
      };
    }

    case actions.CLEAR_CUSTOMER: {
      return {
        ...state,
        currentCustomer: {}
      };
    }

    default:
      return state;
  }
};

export default customerReducer;