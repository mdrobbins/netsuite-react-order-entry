import initialState from './initialState';
import * as actions from '../actions/actionTypes';

const orderReducer = (state = initialState.order, action) => {
  switch (action.type) {

    case actions.PO_NUMBER_CHANGED:
      return {
        ...state,
        poNumber: action.poNumber
      };

    case actions.SHIPTO_ADDRESS_CHANGED:
      return {
        ...state,
        shippingAddress: Number(action.addressId)
      };

    case actions.NEW_ORDER_BUTTON_CLICKED:
      return {
        ...state,
        poNumber: '',
        items: []
      };

    default:
      return state;
  }
};

export default orderReducer;
