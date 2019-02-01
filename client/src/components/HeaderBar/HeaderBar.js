import React from 'react';

import { AppBar, Toolbar, Tab, Tabs } from '@material-ui/core';

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
