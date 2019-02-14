import * as ajax from './ajaxActions';
import * as actions from './actionTypes';
import api from "../api";
import { beginCall } from "./ajaxActions";
import { ajaxError } from "./ajaxActions";
import { createHashHistory } from 'history';

export const searchItemsSuccess = items =>
  ({ type: actions.SEARCH_ITEMS_SUCCESS, items });

export const searchTextChanged = searchText =>
  ({ type: actions.ITEM_SEARCH_TEXT_CHANGED, searchText });

export const itemQuantityChanged = (itemId, quantity) =>
  ({ type: actions.ITEM_QUANTITY_CHANGED, itemId, quantity });

export const addItemToOrder = (itemId) =>
  ({ type: actions.ADD_ITEM_TO_ORDER, itemId });

export const poNumberChanged = poNumber =>
  ({ type: actions.PO_NUMBER_CHANGED, poNumber });

export const shipToAddressChanged = addressId =>
  ({ type: actions.SHIPTO_ADDRESS_CHANGED, addressId });

export const saveOrderSuccess = () =>
  ({ type: actions.SAVE_ORDER_SUCCESS });

export const searchItems = searchText =>
  ajax.dispatchAsync('searching for items', 'searchItems', searchItemsSuccess, searchText);

export function saveOrder(orderData) {
  return function (dispatch) {
    dispatch(beginCall('saving order'));
    // noinspection JSUnresolvedFunction
    return api.saveOrder(orderData)
      .then(response => !!response.json ? response.json() : response)
      .then(response => {
        if (!response.isSuccess) {
          throw response.error ? response.error.message : response.message;
        }
        dispatch(saveOrderSuccess(response.result));
      })
      .catch(error => {
        dispatch(ajaxError(error, true));
      })
      .finally(() => {
        const history = createHashHistory();
        history.push(`/customer/${orderData.customerId}`);
      });
  }
}