import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Projects from './Projects';
import { fetchProjects } from '../../redux/modules/projects';
import './styles.css';
import firebase from 'firebase';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }
  render() {
    return (
      <div>
        <Projects data={this.props.projectData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.projects.isLoading,
  projectData: state.projects.projectData,
  error: state.projects.error
});

ProjectsContainer.propTypes = {
  projectData: PropTypes.array,
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool
};

export default connect(mapStateToProps)(ProjectsContainer);
