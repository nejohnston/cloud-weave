// import React from 'react';

// import { Fab, Zoom } from '@material-ui/core';
// import UpIcon from '@material-ui/icons/ArrowUpward';

// import './styles.css';

// const ToTopButton = () => (
//   <div className='toTopButton'>
//     <Zoom
//       in={this.state.value === index}
//       timeout={transitionDuration}
//       style={{
//         transitionDelay: `${this.state.value === index
//           ? transitionDuration.exit
//           : 0}ms`
//       }}
//       unmountOnExit
//     >
//       <Fab>
//         <UpIcon />
//       </Fab>
//     </Zoom>
//   </div>
// );

// export default ToTopButton;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600]
    }
  }
});

class ToTopButton extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };

    return (
      <div className={classes.root}>
        <Zoom in={true} timeout={transitionDuration} unmountOnExit>
          <Fab className={classes.fab}>
            <UpIcon />
          </Fab>
        </Zoom>
      </div>
    );
  }
}

ToTopButton.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ToTopButton);
