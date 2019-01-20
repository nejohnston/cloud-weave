import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const HeaderBar = () => (
  <div>
    <AppBar position='fixed'>
      <IconButton aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </AppBar>
  </div>
);

export default HeaderBar;
