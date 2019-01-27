import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';

const HeaderBar = () => (
  <div>
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton aria-label='Menu'>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
