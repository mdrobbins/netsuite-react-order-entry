import initialState from './initialState';
import * as actions from '../actions/actionTypes';

const itemReducer = (state = initialState.item, action) => {
  switch (action.type) {
    case actions.ITEM_SEARCH_TEXT_CHANGED:
      return {
        ...state,
        searchText: action.searchText
      };

    case actions.SEARCH_ITEMS_SUCCESS:
      return {
        ...state,
        searchText: '',
        itemSearchResults: action.items
      };

    case actions.ITEM_QUANTITY_CHANGED: {
      const items = [...state.itemSearchResults];
      const item = items.find(i => i.id === action.itemId);

      if (item) {
        item.quantity = action.quantity;
        return {
          ...state,
          itemSearchResults: items
        };
      }

      return state;
    }

    case actions.NEW_ORDER_BUTTON_CLICKED:
      return initialState.item;

    default:
      return state;
  }
};

export default itemReducer;
