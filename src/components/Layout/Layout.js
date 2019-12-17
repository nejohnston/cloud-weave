import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar';
import ToTopButton from '../ToTopButton/ToTopButton';

import './styles.css';
import withWidth from 'material-ui/utils/withWidth';
import SideBar from '../SideBar';

const styles = (theme) => ({
  root: {
    position: 'relative'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

const Layout = ({ children }) => (
  <div className='root'>
    {window.screen.width < 800 ? <HeaderBar /> : <SideBar />}
    <div className='portfolioContainer'>{children}</div>
    <ToTopButton />
  </div>
);

export default withWidth()(Layout);
