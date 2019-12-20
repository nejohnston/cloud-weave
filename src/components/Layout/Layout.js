import React from 'react';
import HeaderBar from '../HeaderBar';
import ToTopButton from '../ToTopButton/ToTopButton';
import { connect } from 'react-redux';

import './styles.css';
import SideBar from '../SideBar';

const Layout = ({ window, children }) => {
  return (
    <div className='root'>
      {window <= 800 ? <HeaderBar /> : <SideBar />}
      <div className='portfolioContainer'>{children}</div>
      <ToTopButton />
    </div>
  );
};

const mapStateToProps = (state) => ({
  window: state.layout.window
});

export default connect(mapStateToProps)(Layout);
