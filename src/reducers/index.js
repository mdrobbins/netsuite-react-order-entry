import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import crossCuttingReducer from './crossCuttingReducer';
import ajax from './ajaxReducer';
import customer from './customerReducer';

const mainReducer = combineReducers({
  customer,
  ajax
});

export default reduceReducers(mainReducer, crossCuttingReducer);