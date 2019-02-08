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

    default:
      return state;
  }
};

export default itemReducer;
