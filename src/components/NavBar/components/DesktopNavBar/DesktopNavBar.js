import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import links from '../../links';
import AvatarHomeLink from '../AvatarHomeLink';
import NavBarMenuEntry from '../NavBarMenuEntry';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#edf6f9',
  },
  menuEntry: {
    fontFamily: 'Quattrocento',
    fontSize: '1.2em',
  },
  drawer: {
    width: '200px',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Box>
          <AvatarHomeLink />
        </Box>
        <Box flexGrow={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
          {links.map((link) => (
            <NavBarMenuEntry key={link.href} href={link.href} isExternal={link.isExternal}>
              {link.text}
            </NavBarMenuEntry>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
