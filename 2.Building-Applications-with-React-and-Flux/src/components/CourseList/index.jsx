import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => (
          <tr key={course.id}>
            <td>
              <Link to={'/course/' + course.slug}>{course.title} </Link>
            </td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

//ONLY RUN IN DEVELOPMENT MODE:

CourseList.propTypes = {
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
