import * as ajax from './ajaxActions';
import * as actions from './actionTypes';

export const searchCustomersSuccess = customers => ({ type: actions.SEARCH_CUSTOMERS_SUCCESS, customers });
export const searchTextChanged = searchText => ({ type: actions.SEARCH_TEXT_CHANGED, searchText });
export const editButtonClicked = (customerId, customerList) => ({ type: actions.CUSTOMER_EDIT_BUTTON_CLICKED, customerId, customerList });
export const searchTabChanged = activeTab => ({ type: actions.CUSTOMER_SEARCH_TAB_CHANGED, activeTab });
export const getRecentCustomers = () => ({ type: actions.GET_RECENT_CUSTOMERS });
export const clearRecentCustomers = () => ({ type: actions.CLEAR_RECENT_CUSTOMERS });
export const getCustomerSuccess = (customer) => ({ type: actions.GET_CUSTOMER_SUCCESS, customer });

export const searchCustomers = searchText =>
  ajax.dispatchAsync('searching for customers', 'searchCustomers', searchCustomersSuccess, searchText);

export const getCustomer = customerId =>
  ajax.dispatchAsync('getting customer', 'getCustomer', getCustomerSuccess, customerId);
