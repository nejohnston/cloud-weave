import React from 'react';

import {
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Menu,
  MenuItem
} from '@material-ui/core';
import { Link } from 'react-scroll';

const HeaderBar = () => {
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div id='header'>
      <AppBar position='fixed' color='default'>
        <Toolbar>
          <Avatar>NJ</Avatar>
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            Open Menu
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
              >
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
              >
                Projects
              </Link>
            </MenuItem>
          </Menu>
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
};

export default HeaderBar;
