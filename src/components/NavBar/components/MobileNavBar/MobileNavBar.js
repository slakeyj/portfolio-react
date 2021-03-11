import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AvatarHomeLink from '../AvatarHomeLink';
import NavBarMenuEntry from '../NavBarMenuEntry';
import links from '../../links';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#edf6f9',
  },
  drawer: {
    width: '200px',
  },
}));

const MobileNavBar = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((oldIsDrawerOpen) => !oldIsDrawerOpen);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton onClick={toggleDrawer} edge="start" color="secondary" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} classes={{ paper: classes.drawer }}>
          <Box m={2}>
            <AvatarHomeLink />
          </Box>
          {links.map((link) => (
            <NavBarMenuEntry key={link.href} href={link.href}>
              {link.text}
            </NavBarMenuEntry>
          ))}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavBar;
