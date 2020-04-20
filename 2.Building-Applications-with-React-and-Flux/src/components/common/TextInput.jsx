import React from 'react';
import { Form, Button } from 'react-bootstrap';
import  PropTypes  from "prop-types";

const TextInput = (props) => {
  console.log('', props.value);
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        id={props.label}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </Form.Group>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange:  PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

TextInput.defaultProps = {
  error:""
}

export default TextInput;
