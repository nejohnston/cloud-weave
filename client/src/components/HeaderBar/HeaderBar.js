import React from 'react';

import { AppBar, Toolbar, Tab, Tabs, Button } from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll';

const HeaderBar = () => (
  <div>
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <Button>
          <Link to='about'>about</Link>
        </Button>
        <Button href='#portfolio'>portfolio</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
