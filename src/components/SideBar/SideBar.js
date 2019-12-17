import React from 'react';

import { Drawer, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-scroll';

const SideBar = () => (
  <div id='header'>
    <Drawer variant='permanent' anchor='left'>
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
    </Drawer>
  </div>
);

export default SideBar;
