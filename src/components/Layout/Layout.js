import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar';
import ToTopButton from '../ToTopButton/ToTopButton';

import './styles.css';
import { withStyles } from '@material-ui/core';

const styles = {
  rootContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: '64px',
    maxWidth: '800px'
  }
};

const Layout = (props) => {
  const { classes, window, children } = props;
  return (
    <div>
      <HeaderBar window={window} />
      <div className={classes.rootContainer}>{children}</div>
      <ToTopButton />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  window: PropTypes.number
};

const mapStateToProps = (state) => ({
  window: state.layout.window,
  dataLoading: state.layout.dataLoading
});

export default connect(mapStateToProps)(withStyles(styles)(Layout));
