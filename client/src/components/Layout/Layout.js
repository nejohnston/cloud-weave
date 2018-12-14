import React from 'react';
import HeaderBar from '../HeaderBar';

const Layout = ({ children }) => (
  <div>
    <div>
      <HeaderBar />
    </div>
    <div>{children}</div>
  </div>
);

export default Layout;
