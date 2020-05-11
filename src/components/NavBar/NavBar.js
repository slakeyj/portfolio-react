import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// makeStyles/useStyles implements styles inline
const useStyles = makeStyles({
  toolStyles: {
    fontSize: '30px',
    backgroundColor: '#fce4ec',
  },
  typographyStyles: {
    color: '#263238'
  },
  navStyles: {

  }
});




const NavBar = () => {
  const classes = useStyles();

  return (


    <AppBar position="static" color="primary">
      <Toolbar className={classes.toolStyles}>
        <Typography className={classes.typographyStyles} variant="title" >
          <Link to='/'>
            Susanna
          </Link>
        </Typography>

        <div>
          <Link to='/about'>
            About
            </Link>
          <Link to='/projects'>
            Projects
            </Link>
          <Link to='/blog'>
            Blog
            </Link>
        </div>
      </Toolbar>
    </AppBar>


  )

}

export default NavBar;