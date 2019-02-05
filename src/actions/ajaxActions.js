import * as actions from './actionTypes';
import api from '../api';

export const beginCall = message => ({ type: actions.BEGIN_AJAX_CALL, message });
export const ajaxError = (message, notify) => ({ type: actions.AJAX_CALL_ERROR, message, notify });

/**
 * A common function to make an api function call then dispatch an action with the result
 * @param {string} message The message to display under the spinner
 * @param {string} apiCall The name of the API function to call
 * @param {function} action The function that should be dispatched with the results
 * @param params Any number of arguments that should be passed to the API function
 * @returns {function(*): (Promise|*|Promise<T>)}
 */
export function dispatchAsync(message, apiCall, action, ...params) {
  return function(dispatch) {
    dispatch(beginCall(message));
    // noinspection JSUnresolvedFunction
    return api[apiCall].apply(api, params)
      .then(response => !!response.json ? response.json() : response)
      .then(response => {
        if (!response.isSuccess) {
          throw response.error ? response.error.message : response.message;
        }
        dispatch(action(response.result))
      })
      .catch(error => {
        dispatch(ajaxError(error, true));
      });
  }
}
