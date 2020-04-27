import React, { Fragment, Component, useEffect } from 'react';

//This function will connect components to redux
import { connect } from 'react-redux';

import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses }) {
  //Will run ones - the second argument is an empty array.
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert('Loading courses failed' + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert('Loading authors failed' + error);
      });
    }
  }, []);

  return (
    <Fragment>
      <h1>Manage Course</h1>
    </Fragment>
  );
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

//This func. determines what state is passed to our
//component via props.
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

//This lets us declare what actions to pass
//to our component on props
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
