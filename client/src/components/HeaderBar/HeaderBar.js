import React from 'react';

import { AppBar, Toolbar, Tab, Tabs, Button } from '@material-ui/core';

import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeaderBar = () => (
  <div>
    <AppBar position='fixed' color='default'>
      <Toolbar>
        <Button>
          <AnchorLink href='#about'>about</AnchorLink>
        </Button>
        <Button href='#portfolio'>portfolio</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
