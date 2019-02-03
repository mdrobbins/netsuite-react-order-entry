import * as ajax from './ajaxActions';
import * as actions from './actionTypes';

export const searchCustomersSuccess = customers => ({ type: actions.SEARCH_CUSTOMERS_SUCCESS, customers });
export const searchTextChanged = searchText => ({ type: actions.SEARCH_TEXT_CHANGED, searchText });
export const editButtonClicked = customerId => ({ type: actions.CUSTOMER_EDIT_BUTTON_CLICKED, customerId });
export const searchTabChanged = activeTab => ({ type: actions.CUSTOMER_SEARCH_TAB_CHANGED, activeTab });

export const searchCustomers = searchText =>
  ajax.dispatchAsync('searching for customers', 'searchCustomers', searchCustomersSuccess, searchText);

