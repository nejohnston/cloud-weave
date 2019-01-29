import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  IconButton,
  Menu,
  Toolbar,
  MenuItem,
  MenuList,
  Tab,
  Tabs
} from '@material-ui/core';

const HeaderBar = () => (
  <div>
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <Tabs>
          <Tab label='About' />
          <Tab label='projects' />
        </Tabs>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
