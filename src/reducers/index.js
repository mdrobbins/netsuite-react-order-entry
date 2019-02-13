import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import crossCuttingReducer from './crossCuttingReducer';
import ajax from './ajaxReducer';
import customer from './customerReducer';
import order from './orderReducer';
import item from './itemReducer';

const mainReducer = combineReducers({
  customer,
  order,
  item,
  ajax
});

export default reduceReducers(mainReducer, crossCuttingReducer);