import initialState from './initialState';
import * as actions from '../actions/actionTypes';

const orderReducer = (state = initialState.order, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default orderReducer;
