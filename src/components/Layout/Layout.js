import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';
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
  },
  imageContainer: {
    height: '100vh',
    width: '100vw'
    // maxHeight: '100px'
  }
};

const Layout = (props) => {
  const { window, children } = props;

  return (
    <div>
      <HeaderBar window={window} />
      <div style={styles.imageContainer}>
        <Image src='https://cdn.stocksnap.io/img-thumbs/960w/6UHHE19YG7.jpg' />
      </div>

      {/* // style={{ height: '100vh' }} */}
      <div className={styles.rootContainer}>{children}</div>
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

export default connect(mapStateToProps)(Layout);
