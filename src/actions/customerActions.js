import * as ajax from './ajaxActions';
import * as actions from './actionTypes';

export const searchCustomersSuccess = customers => ({ type: actions.SEARCH_CUSTOMERS_SUCCESS, customers });

export const searchCustomers = searchString =>
  ajax.dispatchAsync('searching for customers', 'searchCustomers', searchCustomersSuccess, searchString);
