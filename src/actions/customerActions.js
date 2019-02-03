import * as ajax from './ajaxActions';
import * as actions from './actionTypes';

export const searchCustomersSuccess = customers => ({ type: actions.SEARCH_CUSTOMERS_SUCCESS, customers });
export const searchTextChanged = searchText => ({ type: actions.SEARCH_TEXT_CHANGED, searchText });

export const searchCustomers = searchText =>
  ajax.dispatchAsync('searching for customers', 'searchCustomers', searchCustomersSuccess, searchText);

