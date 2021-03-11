import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link as ReactRouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuEntry: {
    fontFamily: 'Quattrocento',
    fontSize: '1.2em',
  },
}));

const NavBarMenuEntry = ({ href, children, isExternal }) => {
  const classes = useStyles();

  const linkProps = isExternal ? { href } : { component: ReactRouterLink, to: href };

  return (
    <Box mx={2}>
      <Link {...linkProps} underline="none">
        <Typography component="h2" className={classes.menuEntry}>
          {children}
        </Typography>
      </Link>
    </Box>
  );
};

export default NavBarMenuEntry;
