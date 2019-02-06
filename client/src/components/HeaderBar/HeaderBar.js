import React from 'react';

import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-scroll';

const HeaderBar = () => (
  <div id='header'>
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <Link to='about' spy={true} smooth={true} offset={-70} duration={500}>
          <Button>about</Button>
        </Link>
        <Link
          to='projects'
          spy={true}
          smooth={true}
          offset={-70}
          duration={750}
        >
          <Button>projects</Button>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
