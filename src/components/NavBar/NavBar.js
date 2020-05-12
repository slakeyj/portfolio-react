import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// makeStyles/useStyles implements styles inline
const useStyles = makeStyles({
  navStyles: {
    textDecoration: 'none',
    color: '#263238',
    fontSize: '30px',
    margin: '1em'
  },
  linkStyles: {
    textDecoration: 'none',
    color: '#263238',
    fontSize: '20px',
    margin: '1em 1em'
  },
  divStyles: {
    textAlign: 'right'
  }

});




const NavBar = () => {
  const classes = useStyles();

  return (

    <>
      <AppBar position="static" color="primary">
        <Typography variant="title" >
          <Link to='/' className={classes.navStyles}>
            Susanna
          </Link>
        </Typography>


        <div className={classes.divStyles}>
          <Link to='/about' className={classes.linkStyles}>
            About
            </Link>
          <Link to='/projects' className={classes.linkStyles}>
            Projects
            </Link>
          <Link to='/blog' className={classes.linkStyles}>
            Blog
            </Link>
        </div>
      </AppBar>

    </>


  )

}

export default NavBar;