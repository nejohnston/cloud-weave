import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  IconButton,
  Menu,
  Toolbar,
  MenuItem,
  MenuList
} from '@material-ui/core';

const HeaderBar = () => (
  <div>
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <IconButton aria-label='Menu'>
          <MenuIcon />
        </IconButton>
        <Menu>
          <MenuList>
            <MenuItem>sdfdsfs</MenuItem>
          </MenuList>
        </Menu>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
