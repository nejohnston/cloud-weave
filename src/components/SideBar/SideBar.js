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

const drawerWidth = 240;

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: {
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3)
  }
};

const SideBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Drawer variant='permanent' anchor='left' className={classes.drawer}>
        <CssBaseline />
        <Avatar>NJ</Avatar>
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
