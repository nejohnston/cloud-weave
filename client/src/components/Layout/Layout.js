import React from 'react';
import HeaderBar from '../HeaderBar';
import ToTopButton from './ToTopButton';

import './styles.css';

const Layout = ({ children }) => (
  <div className='root'>
    <HeaderBar />
    {children}
    <ToTopButton />
  </div>
);

export default Layout;
