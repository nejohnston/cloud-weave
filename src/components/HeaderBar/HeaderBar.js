import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll';

const styles = {
  headerContainer: {
    alignItems: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80vw',
    minWidth: '300px',
    alignItems: 'center',
    padding: '0'
  },
  iconTitleContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
};

const Loader = () => (
  <div class='loader triangle'>
    <svg viewBox='0 0 86 80'>
      <polygon points='43 8 79 72 7 72' />
    </svg>
  </div>
);

const HeaderBar = (props) => {
  const { classes } = props;

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
      <AppBar
        position='fixed'
        color='default'
        className={classes.headerContainer}
      >
        <Toolbar className={classes.header}>
          <div className={classes.iconTitleContainer}>
            <Loader />
            <Link to='/' spy={true} smooth={true} offset={-70} duration={750}>
              {/* <Typography variant='h5' component='h6'>
                Tech Weave
              </Typography> */}
            </Link>
          </div>
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

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
