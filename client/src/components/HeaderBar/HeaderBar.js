import React from 'react';

import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll';

const HeaderBar = () => (
  <div>
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <Button>
          <Link to='about' spy={true} smooth={true} offset={-70} duration={500}>
            about
          </Link>
        </Button>
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
