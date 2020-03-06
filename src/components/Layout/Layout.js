import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar';
import ToTopButton from '../ToTopButton/ToTopButton';

import './styles.css';

const Layout = ({ children, window, dataLoading }) => {
  return (
    <div>
      <HeaderBar window={window} />
      <div className='portfolioContainer'>{children}</div>
      <ToTopButton />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => ({
  window: state.layout.window,
  dataLoading: state.layout.dataLoading
});

export default connect(mapStateToProps)(Layout);
