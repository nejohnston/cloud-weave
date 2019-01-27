import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar } from '@material-ui/core';

const HeaderBar = () => (
  <div>
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton aria-label='menu'>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
