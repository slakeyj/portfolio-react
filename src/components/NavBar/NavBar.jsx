import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DesktopNavBar from './components/DesktopNavBar';
import MobileNavBar from './components/MobileNavBar';

const NavBar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return isDesktop ? <DesktopNavBar /> : <MobileNavBar />;
};

export default NavBar;
