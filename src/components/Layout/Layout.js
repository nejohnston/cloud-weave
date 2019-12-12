import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeaderBar from '../HeaderBar';
import ToTopButton from './ToTopButton';

import './styles.css';

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
  <div>
    <HeaderBar />
    <div className='portfolioContainer'>{children}</div>
    <ToTopButton />
  </div>
);

export default withStyles(styles)(Layout);
