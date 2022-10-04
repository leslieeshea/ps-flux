import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _courses = [];

class CourseStore extends EventEmitter {
	// this will allow React components to subscribe to our store so they're notified when changes occur
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	// this will allow React components to un-subscribe from our store
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getCourses() {
		return _courses;
	}

	getCourseBySlug(slug) {
		return _courses.find(course => course.slug === slug);
	}
}

const store = new CourseStore();

Dispatcher.register(action => {
	switch(action.actionType) {
		case actionTypes.CREATE_COURSE:
			_courses.push(action.course);
			store.emitChange();
			break;
		default:
	}
});

export default store;
