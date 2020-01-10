import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Toolbar,
  Button,
  Avatar,
  CssBaseline
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

const drawerWidth = 190;

const styles = {
  avatar: {
    width: drawerWidth,
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  toolbar: {
    width: drawerWidth,
    height: '60%',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

const SideBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.drawer}>
      <Drawer variant='permanent' anchor='left' className={classes.drawer}>
        <CssBaseline />
        <div className={classes.avatar}>
          <Avatar>NJ</Avatar>
        </div>
        <Toolbar className={classes.toolbar}>
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
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={750}
          >
            <Button>projects</Button>
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
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
