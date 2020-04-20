import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

//This is a private array. Meaning, this array isnt exported outside of this module.
//Only the CourseStore down below. And this is a good thing because it means that no
//one can change this _courses unless pass thru public API
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses(){
    return _courses;
  }

  getCourseBySlug(slug){
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      //We need emit a change:
      store.emitChange();
      break;
    default:
    //nothing to do here
  }
});

export default store;
