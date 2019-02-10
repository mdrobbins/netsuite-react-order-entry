import initialState from './initialState';
import * as actions from '../actions/actionTypes';

export default function ajaxReducer(state = initialState.ajax, action) {
  const callsInProgress = state.callsInProgress;
  if (action.type === actions.BEGIN_AJAX_CALL) {
    return { ...state, callsInProgress: callsInProgress + 1, loadingText: action.message };
  } else if (callsInProgress > 0 && (action.type === actions.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type))) {
    if (action.type === actions.AJAX_CALL_ERROR) {
      console.error(action.message);
    }
    return { ...state, callsInProgress: callsInProgress - 1 };
  }

  switch (action.type) {
    default:
      return state;
  }
}

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}