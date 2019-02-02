import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import crossCuttingReducer from './crossCuttingReducer';
import ajax from './ajaxReducer';

const mainReducer = combineReducers({
  ajax
});

export default reduceReducers(mainReducer, crossCuttingReducer);