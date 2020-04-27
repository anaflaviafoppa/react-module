import React, { Fragment, Component } from 'react';

//This function will connect components to redux
import { connect } from 'react-redux';

import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';



class ManageCoursePage extends Component {
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
        <h1>Manage Course</h1>
        
      </Fragment>
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
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
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
