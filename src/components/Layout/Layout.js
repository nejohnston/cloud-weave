import React from 'react';
import HeaderBar from '../HeaderBar';
import ToTopButton from '../ToTopButton/ToTopButton';

import './styles.css';

const Layout = ({ children }) => {
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

export default Layout;
