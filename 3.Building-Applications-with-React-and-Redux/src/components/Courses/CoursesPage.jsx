import React, { useState, useEffect, Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import CourseList from './CourseList.jsx';

// const CoursesPage = (props) => {
//   const [course, setCourse] = useState({
//     title: "",
//   });

//   return (
//     <Fragment>
//       <h1>Courses</h1>
//       <Link className="btn btn-primary" to="/course">
//         Add Course
//       </Link>
//       {/* <CourseList /> */}
//     </Fragment>
//   );
// };

// export default CoursesPage;

export default class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: '',
      },
    };
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  }

  render() {
    return (
      <Fragment>
        <h1>Courses</h1>
        <form>
          <h3>Ad Course</h3>
          <input type="text" onChange={this.handleChange} value={this.state.course.title} />
          <input type="submit" value="Save" />
        </form>
      </Fragment>
    );
  }
}
