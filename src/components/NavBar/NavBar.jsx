import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link as ReactRouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const NavBar = () => {
  return (
    <>
      <AppBar position='static' color='primary'>
        <Box
          bgcolor='#edf6f9'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          pt={1}
        >
          <Typography variant='h6' component='h1'>
            <Link
              color='secondary'
              component={ReactRouterLink}
              to='/'
              underline='none'
            >
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                style={{
                  border: '4px solid #5e6472 ',
                  borderRadius: '50%',
                  padding: '0.2em',
                  width: '1.8em',
                  height: '1.8em',
                }}
                mx={2}
                mb={1}
              >
                sl
              </Box>
            </Link>
          </Typography>
          <Box display='flex' alignItems='flex-end'>
            <Typography variant='h5' component='h2'>
              <Link component={ReactRouterLink} to='/about' underline='none'>
                <Box display='inline' fontFamily='Quattrocento' mx={1}>
                  About
                </Box>
              </Link>
              <Link component={ReactRouterLink} to='/projects' underline='none'>
                <Box display='inline' fontFamily='Quattrocento' mx={2}>
                  Projects
                </Box>
              </Link>
            </Typography>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
