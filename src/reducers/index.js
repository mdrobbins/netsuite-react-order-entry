import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import crossCuttingReducer from './crossCuttingReducer';
import ajax from './ajaxReducer';
import customer from './customerReducer';
import order from './orderReducer';
import item from './itemReducer';
import navigation from './navigationReducer';

const mainReducer = combineReducers({
  customer,
  order,
  item,
  navigation,
  ajax
});

export default reduceReducers(mainReducer, crossCuttingReducer);