import React, { useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import CourseForm from '../CourseForm';
import courseStore from '../../stores/courseStore';
import { toast } from 'react-toastify';
import * as courseActions from '../../actions/courseActions';

const ManegeCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });

  //Like ComponentDidMount
  useEffect(() => {
    const slug = props.match.params.slug; //will redirect /courses/:slug
    if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.match.params.slug]);

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function handleSubmit(event) {
    //This will prevent hte page from posting back to the server
    event.preventDefault();
    if (!formIsValid()) return;

    courseActions.saveCourse(course).then((course) => {
      props.history.push('/courses');
      toast.success('Course saved.');
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = 'Title is required!';
    if (!course.authorId) _errors.authorId = 'Author Id is required!';
    if (!course.category) _errors.category = 'Category is required!';

    setErrors(_errors);
    //Form is valid if errors objs  has no properties
    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message={'Are you sure you want to leave?'} /> */}
      {/* {props.match.params.slug} */}
      <CourseForm
        onSubmit={handleSubmit}
        course={course}
        onChange={handleChange}
        errors={errors}
        course={course}
      />
    </>
  );
};

export default ManegeCoursePage;
