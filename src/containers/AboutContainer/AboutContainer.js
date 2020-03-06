import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Typography } from '@material-ui/core';

class AboutContainer extends Component {
  render() {
    return (
      <div>
        <div id='about' className='container'>
          <Typography variant='h4'>
            Tech Weave builds, enhances, and maintains your story, your website.
          </Typography>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
