import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      //THIS IS AN ACTION:
      //Hey dispatcher, go tell all the stores that a course was just created.
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}
