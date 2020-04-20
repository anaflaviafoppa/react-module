import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CourseList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => (
          <tr key={course.id}>
            <td>
              <Link to={'/course/' + course.slug}>{course.title} </Link>
            </td>
            <td>{course.authorId === 1 ? 'Cory House' : 'Scott Allen'}</td>
            <td>{course.category}</td>
            <td><Button variant="danger" onClick={() => props.deleteCourse(course.id)}>Delete</Button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

//ONLY RUN IN DEVELOPMENT MODE:

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

CourseList.defaultProps = {
  courses: [],
};

export default CourseList;
