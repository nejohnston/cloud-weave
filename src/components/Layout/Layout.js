import React from 'react';
import { connect } from 'react-redux';
import HeaderBar from '../HeaderBar';
import ToTopButton from '../ToTopButton/ToTopButton';

import './styles.css';

const Loader = () => (
  <div class='loader triangle'>
    <svg viewBox='0 0 86 80'>
      <polygon points='43 8 79 72 7 72' />
    </svg>
  </div>
);

const Layout = ({ children, dataLoading }) => {
  return (
    <div id='header' className='root'>
      <HeaderBar />
      <div id='header' className='portfolioContainer'>
        {children}
      </div>
      <ToTopButton />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  userLoading: state.auth.userLoading
});

export default connect(mapStateToProps)(Layout);
