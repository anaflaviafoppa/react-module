//import React, { Component, Fragment } from 'react';
import courseStore from '../../stores/courseStore';

//AS CLASS MODEL:

// export default class CoursesPage extends Component {
//   //You can use state outside constructor
//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: [],
//     };
//   }

//   componentDidMount() {
//     getCourses().then((courses) => {
//       this.setState({
//         courses,
//       });
//     });
//   }

//   render() {
//     return (
//       <Fragment>
//         <h1>Courses</h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author ID</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.courses.map((course) => (
//               <tr key={course.id}>
//                 <td>{course.title}</td>
//                 <td>{course.authorId}</td>
//                 <td>{course.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Fragment>
//     );
//   }
// }

import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CourseList from '../CourseList';
import { loadCourses, deleteCourse } from '../../actions/courseActions';

const CoursesPage = (props) => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    //Since our component is connected to the Flux store, 
    //when courses are added to the store, onChange will be
    //called.

    courseStore.addChangeListener(onChange);
    if(courseStore.getCourses().length === 0 ) loadCourses();
    //cleanup on unmount
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  

  
  return (
    <Fragment>
      <h1>Courses</h1>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse}/>
    </Fragment>
  );
};

export default CoursesPage;
