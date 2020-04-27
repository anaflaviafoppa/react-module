import React, { Fragment, Component } from 'react';
// import { Link } from 'react-router-dom';
import CourseList from './CourseList.jsx';

//This function will connect components to redux
import { connect } from 'react-redux';

import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

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
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert('Loading courses failed' + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert('Loading authors failed' + error);
      });
    }
  }
  render() {
    return (
      <Fragment>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h1>Courses</h1>
        <button
          style={{ marginBottom: 28 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </Fragment>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

//This func. determines what state is passed to our
//component via props.
function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId).name,
            };
          }),
    authors: state.authors,
  };
}

//This lets us declare what actions to pass
//to our component on props
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
