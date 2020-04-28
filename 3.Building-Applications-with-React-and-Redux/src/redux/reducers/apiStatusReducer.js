import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}
export default function apiCallStatusReducer(state = initialState.apiCallsInProgress, action) {
  if (action.type === types.BEGIN_API_CALL) {
    console.log('STATE REDUCER 1',state+1)
    return state+1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    console.log('STATE REDUCER 2',state-1)
    return state-1;
  }


  return state;
}
