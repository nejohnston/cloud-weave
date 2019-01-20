import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

const HeaderBar = () => (
  <div>
    <AppBar position='fixed'>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </AppBar>
  </div>
);

export default HeaderBar;
