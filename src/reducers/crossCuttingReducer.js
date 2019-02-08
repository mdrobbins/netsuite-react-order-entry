import initialState from './initialState';
import * as actions from '../actions/actionTypes';

const crossCuttingReducer = (state = initialState, action) => {
  logAction(action);

  switch(action.type) {
    case actions.ADD_ITEM_TO_ORDER: {
      const item = state.item.itemSearchResults.find(i => i.id === action.itemId);
      if (item) {
        const items = [{ ...item }, ...state.order.items];
        item.quantity = '';
        const itemSearchResults = [...state.item.itemSearchResults];
        return {
          ...state,
          order: {
            ...state.order,
            items
          },
          item: {
            ...state.item,
            itemSearchResults
          }
        };
      }
      return state
    }

    default:
      return state;
  }
};

function logAction({ type, ...payload }) {
  console.log(type, ' ', payload);
}

export default crossCuttingReducer;