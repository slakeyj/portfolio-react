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
          bgcolor='#FAE9F9'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          pt={1}
        >
          <Typography variant='h4' component='h1'>
            <Link component={ReactRouterLink} to='/' underline='hover'>
              <Box fontFamily='Quattrocento' mx={1}>
                Susanna
              </Box>
            </Link>
          </Typography>
          <Box display='flex' alignItems='flex-end'>
            <Typography variant='h5' component='h2'>
              <Link component={ReactRouterLink} to='/about' underline='hover'>
                <Box display='inline' fontFamily='Quattrocento' mx={1}>
                  About
                </Box>
              </Link>
              <Link
                component={ReactRouterLink}
                to='/projects'
                underline='hover'
              >
                <Box display='inline' fontFamily='Quattrocento' mx={1}>
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
