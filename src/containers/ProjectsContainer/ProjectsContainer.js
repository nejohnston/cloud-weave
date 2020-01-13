import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProjects } from '../../redux/modules/projects';
import './styles.css';

class ProjectsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }
  render() {
    return (
      <div>
        <Projects project={this.props.projectData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.projects.isLoading,
  projectData: state.projects.aboutData,
  error: state.projects.error
});

ProjectsContainer.propTypes = {
  projectData: PropTypes.array,
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool
};

export default connect(mapStateToProps)(ProjectsContainer);
