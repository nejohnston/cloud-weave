import React from 'react';

import { AppBar, Toolbar, Tab, Tabs, Typography } from '@material-ui/core';

function TabContainer(props) {
  return (
    <Typography component='div' style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const HeaderBar = () => (
  <div>
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <Tabs>
          <Tab label='About' fullWidth='true' />
          <Tab label='Projects' fullWidth='true' />
        </Tabs>
      </Toolbar>
    </AppBar>
    {value === 0 && <TabContainer>Item One</TabContainer>}
    {value === 1 && <TabContainer>Item Two</TabContainer>}
  </div>
);

export default HeaderBar;
