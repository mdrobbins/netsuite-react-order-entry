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

    default:
      return state;
  }
};

export default orderReducer;
