import React from 'react';

import { AppBar, Toolbar, Tab, Tabs, Button } from '@material-ui/core';

const HeaderBar = () => (
  <div>
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <Button href='#about'>about</Button>
        <Button href='#portfolio'>portfolio</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
