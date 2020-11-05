import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footerStyles: {
    height: '6em',
    marginTop: '12em',
    textAlign: 'center'
  }
})

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footerStyles}>&copy;2020 Susanna Lakey</footer>
  )
}

export default Footer;