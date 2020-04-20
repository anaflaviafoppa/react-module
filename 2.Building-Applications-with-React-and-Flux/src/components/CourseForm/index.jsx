import React from 'react';
import { Form, Button } from 'react-bootstrap';
import TextInput from '../common/TextInput';
import  PropTypes  from "prop-types";

const CourseForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />

      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
          as="select"
          name="authorId"
          onChange={props.onChange}
          value={props.course.authorId || ''}
        >
          <option value="" />
          <option value="1">Cory House</option>
          <option value="2">Scott Allen</option>
        </Form.Control>

        {props.errors.authorId && <div className="alert alert-danger">{props.errors.authorId}</div>}
      </Form.Group>

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange:  PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
