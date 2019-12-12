import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class AboutContainer extends Component {
  render() {
    return (
      <div>
        <div id='test' className='container'>
          <p>tewst</p>
        </div>
        <div id='about' className='container'>
          <p>about</p>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
