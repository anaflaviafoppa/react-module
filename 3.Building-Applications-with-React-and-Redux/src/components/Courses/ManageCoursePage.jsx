import React, { Fragment, Component, useEffect, useState } from 'react';

//This function will connect components to redux
import { connect } from 'react-redux';

import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm.jsx';
import { newCourse } from '../../../tools/mockData';

//Usar ...props para não haver conflito com a variável "course"
function ManageCoursePage({ courses, authors, loadAuthors, loadCourses, saveCourse, ...props }) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

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

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveCourse(course);
    
  }

  return (
    <CourseForm
      onChange={handleChange}
      onSave={handleSave}
      course={course}
      errors={errors}
      authors={authors}
    />
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
};

//This func. determines what state is passed to our
//component via props.
function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

//This lets us declare what actions to pass
//to our component on props
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
