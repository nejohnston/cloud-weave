import React from 'react';

import { Fab, Zoom } from '@material-ui/core';
import UpIcon from '@material-ui/icons/ArrowUpward';

const ToTopButton = () => (
  <div>
    <Zoom>
      <Fab>
        <UpIcon />
      </Fab>
    </Zoom>
  </div>
);

export default ToTopButton;
