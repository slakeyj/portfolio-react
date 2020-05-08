import React from 'react';
import profile from './profile.jpg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
  imageStyles: {
    borderRadius: '50%',
    marginTop: '6em',
  },
  contactBarStyles: {
    marginTop: '1em'
  },
  iconStyles: {
    margin: '2em',
    color: 'green'
  }
});



const Home = () => {
  const classes = useStyles();
  return (

    <>
      <Grid container direction="column" spacing={1}  >
        <Grid container item justify="center">
          <img src={profile} className={classes.imageStyles} alt="Profile" />
        </Grid>
        <Grid container item justify="center">
          <div className={classes.contactBarStyles}>
            <a href="https://www.linkedin.com/in/susanna-lakey/" className={classes.iconStyles}>
              <LinkedInIcon />
            </a>
            <a href="https://github.com/slakeyj" className={classes.iconStyles}>
              <GitHubIcon />
            </a>
            <a href="https://twitter.com/susannalakey" className={classes.iconStyles}>
              <TwitterIcon />
            </a>
          </div>
        </Grid>
      </Grid>

    </>
  )
}

export default Home;