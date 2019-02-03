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

    case actions.CUSTOMER_EDIT_BUTTON_CLICKED:
      const clickedCustomer = state.customerSearchResults.find(c => c.id === action.customerId);
      const recentCustomers = state.recentCustomers.filter(c => c.id !== action.customerId);
      recentCustomers.unshift(clickedCustomer);

      return {
        ...state,
        recentCustomers
      };

    case actions.CUSTOMER_SEARCH_TAB_CHANGED:
      return {
        ...state,
        activeTab: action.activeTab
      };

    default:
      return state;
  }
};

export default customerReducer;