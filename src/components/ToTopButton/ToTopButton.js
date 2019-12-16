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
import { withStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link, animateScroll } from 'react-scroll';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  },
  toTopButton: {
    position: 'fixed'
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
      <Zoom in={true} timeout={transitionDuration} unmountOnExit>
        <Fab className={classes.fab}>
          <Link to='header' spy={true} smooth={true} duration={500}>
            <UpIcon />
          </Link>
        </Fab>
      </Zoom>
    );
  }
}

ToTopButton.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ToTopButton);
