import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

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
}

const store = new CourseStore();

export default store;
