import React, { Fragment, Component } from 'react';
// import { Link } from 'react-router-dom';
// import CourseList from './CourseList.jsx';

//This function will connect components to redux
import { connect } from 'react-redux';

import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

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

class CoursesPage extends Component {
  state = {
    course: {
      title: '',
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    //prevent the page reload:
    event.preventDefault();
    //ACTION TO ADD A NEW COURSE:
    this.props.createCourse(this.state.course);
  };

  render() {
    return (
      <Fragment>
        <h1>Courses</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Add Course</h3>
          <input type="text" onChange={this.handleChange} value={this.state.course.title} />
          <input type="submit" value="Save" />
          {this.props.courses.map((course) => (
            <div key={course.title}>{course.title}</div>
          ))}
        </form>
      </Fragment>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
};

//This func. determines what state is passed to our
//component via props.
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

//This lets us declare what actions to pass
//to our component on props
function mapDispatchToProps(dispatch) {
  return {
    createCourse: (course) => dispatch(courseActions.createCourse(course)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
