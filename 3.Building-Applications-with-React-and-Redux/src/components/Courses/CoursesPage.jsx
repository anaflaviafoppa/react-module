import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CourseList from './CourseList.jsx';


const CoursesPage = (props) => {
  
  return (
    <Fragment>
      <h1>Courses</h1>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      {/* <CourseList /> */}
    </Fragment>
  );
};

export default CoursesPage;
