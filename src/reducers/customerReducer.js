import initalState from './initialState';
import * as actions from '../actions/actionTypes';

const customerReducer = (state = initalState.customer, action) => {
  switch(action.type) {
    case actions.SEARCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customerSearchResults: action.customers
      };

    default:
      return state;
  }
};

export default customerReducer;