import React from 'react';
import { getCourses } from '../api/courseApi';

class CoursesPage extends React.Component {
	state = {
		courses: []
	};

	componentDidMount() {
		// get courses from the API, and when it completes, store the array of courses in state
		getCourses().then(courses => this.setState({ courses: courses }));
		// will only update state on the properties that you specify
		// if you had other properties stored in state, it would be unaffected
	}

	render() {
		return <h2>Courses</h2>
	}
}

export default CoursesPage;
