import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      //THIS IS AN ACTION:
      //Hey dispatcher, go tell all the stores that a course was just created.
      actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses, // can be just courses
    });
  });
}

export function deleteCourse(id){
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      //THIS IS AN ACTION:
      //Hey dispatcher, go tell all the stores that a course was just created.
      actionType: actionTypes.DELETE_COURSE,
      id
    });
  });
}
