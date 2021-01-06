import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';

// import './styles.css';
// import { Typography, Grid, Paper } from '@material-ui/core';
// import WebIcon from '@material-ui/icons/Web';
import About from './About';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     height: 140,
//     width: 100
//   },
//   control: {
//     padding: theme.spacing(2)
//   }
// }));

class AboutContainer extends Component {
  render() {
    return (
      <div id='about'>
        <About />
      </div>
    );
  }
}

export default AboutContainer;
