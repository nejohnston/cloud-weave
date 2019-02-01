import React from 'react';

import { AppBar, Toolbar, Tab, Tabs } from '@material-ui/core';

const HeaderBar = () => (
  <div>
    <AppBar position='sticky' color='default'>
      <Toolbar />
    </AppBar>
    {value === 0 && <TabContainer>Item One</TabContainer>}
    {value === 1 && <TabContainer>Item Two</TabContainer>}
  </div>
);

export default HeaderBar;
