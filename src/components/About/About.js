import React from 'react';
import { Paper, Grid } from '@material-ui/core'
import profile from '../Home/profile.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textBox: {
    margin: '1em 0 0 1em',


  },
  imageBox: {
    margin: '1em 0 0 0;',

    width: '1em'
  },
  image: {
    borderRadius: '50%',
    marginTop: '1em'
  },
  text: {
    margin: '3em',
  },
  textIndent: {
    textIndent: '2em'
  }
});


const About = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center">
      <Grid className={classes.imageBox} container xs={5} justify="center">
        <img className={classes.image} src={profile} alt="Profile" />

      </Grid>
      <Grid className={classes.textBox} item xs={5} justify="center">
        {/* <Paper square elevation={3} > */}
        <div className={classes.text}>
          <h1>Hello!</h1>
          <p>I'm Susanna Lakey and I'm a frontend software developer.</p>
          <p><strong>Languages:</strong> JavaScript, CSS, HTML5</p>
          <p><strong>Technologies:</strong> React, Redux, Git, GitHub, MongoDB, Mongoose, Express, Node, VSCode, Material UI
            </p>
          <p><strong>Interested in:</strong> GraphQL, Gatsby, Jekyll </p>

        </div>
        {/* </Paper> */}
      </Grid>


      <Grid className={classes.textBox} item xs={5} justify="center">
        {/* <Paper square elevation={3} > */}
        <div className={classes.text}>
          <h2>Experience</h2>


          <p><strong>MEOW Cat Rescue | Shelter Caregiver | Kirkland, WA</strong></p>
          <p>October 2015 - July 2019</p>
          <p>Communicated changes seen in animals to management and co-workers daily.
          Contributed to the development of an emergency response plan in the event of a medical emergency with a cat.
          Worked as a team to provide care to all cats within the shelter including administering medications.
          Trained new employees and volunteers to the standard required by the shelter.</p>

          <p><strong>Seattle Animal Shelter | Cat Team Volunteer  | Seattle, WA</strong></p>
          <p>2013 - 2015</p>
          <p>Worked with clients to guide them through the adoption process.
          Communicated with the volunteer team to ensure all cats were cared for.</p>

          <p><strong>Elements Therapeutic Massage | Massage Therapist | Seattle, WA</strong></p>
          <p>2010 - 2011</p>
          <p>Worked with clients to develop a customized therapeutic plan.
          Recorded accurate documentation to fit the standard required for billing insurance.</p>


        </div>
        {/* </Paper> */}

      </Grid>

      <Grid className={classes.textBox} item xs={5} >
        {/* <Paper square elevation={3} > */}
        <div className={classes.text}>

          <h2>Education</h2>
          <p><strong>Code Fellows | Seattle, WA</strong></p>
          <p className={classes.textIndent}>Certificate - Advanced Software Development in Full-Stack JavaScript</p>
          <p className={classes.textIndent}> </p>
          <p className={classes.textIndent}>April 2020</p>
          <p><strong>Bellevue College | Bellevue, WA</strong></p>
          <p className={classes.textIndent}>Associate of Arts and Sciences, 2014</p>

        </div>
        {/* </Paper> */}

      </Grid>

    </Grid>

  )

}

export default About;