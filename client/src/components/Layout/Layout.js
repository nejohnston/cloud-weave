import React from 'react';
import HeaderBar from '../HeaderBar';
import ToTopButton from '../ToTopButton/ToTopButton';

const Layout = ({ children }) => (
  <div>
    <div>
      <HeaderBar />
    </div>
    <div>{children}</div>
    <ToTopButton />
  </div>
);

export default Layout;
