import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //This is will mutate the state:
      //state.push(action.course)
      return [...state, { ...action.course }];

    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
