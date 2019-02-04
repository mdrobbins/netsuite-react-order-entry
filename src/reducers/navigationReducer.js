import initialState from './initialState';
import * as actions from '../actions/actionTypes';

const navigationReducer = (state = initialState.navigation, action) => {
  switch(action.type) {
    case actions.CUSTOMER_EDIT_BUTTON_CLICKED:
      return {
        ...state,
        showCustomerSearchScreen: false,
        showCustomerEntryScreen: true
      };

    default:
      return state;
  }
};

export default navigationReducer;