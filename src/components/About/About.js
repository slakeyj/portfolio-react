import React from 'react';
import { Paper, Grid } from '@material-ui/core'
import profile from '../Home/profile.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textBox: {
    margin: '3em 5em 0 7em',

  },
  image: {
    margin: '3em'
  },
  text: {
    margin: '4em'
  }
});


const About = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid className={classes.textBox} item xs={5} justify="center">
        <Paper square elevation={3} >
          <div className={classes.text}>
            <h1>Hello!</h1>
            <p>About!</p>
          </div>
        </Paper>
      </Grid>

      <Grid className={classes.image} container xs={4} justify="center">
        <img src={profile} alt="Profile" />

      </Grid>
    </Grid>

  )

}

export default About;