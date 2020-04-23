import React, { Fragment, Component } from 'react';
// import { Link } from 'react-router-dom';
// import CourseList from './CourseList.jsx';

//This function will connect components to redux
import { connect } from 'react-redux';

import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

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
  render() {
    return (
      <Fragment>
        <h1>Courses</h1>

        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </Fragment>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
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
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
