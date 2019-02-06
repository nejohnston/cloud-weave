import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AboutContainer from '../AboutContainer';
import ProjectsContainer from '../ProjectsContainer';

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <AboutContainer />
        </div>
        <div>
          <ProjectsContainer />
        </div>
      </div>
    );
  }
}

export default PortfolioContainer;
