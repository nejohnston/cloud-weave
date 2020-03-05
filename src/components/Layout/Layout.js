import React from 'react';
import HeaderBar from '../HeaderBar';
import ToTopButton from '../ToTopButton/ToTopButton';
import { connect } from 'react-redux';

import './styles.css';

const Layout = ({ window, children }) => {
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

const mapStateToProps = (state) => ({
  window: state.layout.window
});

export default connect(mapStateToProps)(Layout);
