import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


// makeStyles/useStyles implements styles inline
const useStyles = makeStyles({
  toolStyles: {
    fontSize: '30px',
    backgroundColor: '#fce4ec',
  },
  typographyStyles: {
    color: '#263238'
  }
});




const NavBar = () => {
  const classes = useStyles();

  return (
    <div>

      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolStyles}>
          <Typography className={classes.typographyStyles} variant="title" >
            Susanna
          </Typography>

          <Typography alignRight>
            <Link href="#" >
              About
            </Link>
            <Link href="#"  >
              Projects
            </Link>
            <Link href="#" >
              Blog
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )

}

export default NavBar;