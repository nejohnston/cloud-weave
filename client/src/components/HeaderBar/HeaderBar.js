import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, IconButton, Menu, Toolbar, MenuItem } from '@material-ui/core';

const HeaderBar = () => (
  <div>
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton aria-label='Menu'>
          <Menu>
            <MenuItem>hello</MenuItem>
          </Menu>
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
