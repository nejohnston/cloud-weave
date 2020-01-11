import React from 'react';

import {
  AppBar,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
          <IconButton
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                onClick={handleClose}
              >
                About
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                onClick={handleClose}
              >
                Projects
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
