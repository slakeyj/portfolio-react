import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import profile from '../Home/profile.jpg';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TechList from './components/TechList';

const useStyles = makeStyles({
  avatar: {
    width: '100%',
    height: 'auto',
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box width="100%" p={3}>
            <Avatar alt="Profile" src={profile} className={classes.avatar} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography color="secondary" variant="subtitle1">
            Hello!
          </Typography>
          <Typography variant="body2">
            I'm Susanna Lakey and I'm a frontend software developer based in Seattle, WA. I come from a background in
            animal care, having worked and volunteered at animal shelters in the Seattle area.
          </Typography>
          <Typography variant="body2">
            I decided it was time for a change in my life and gave software development a try. I found myself naturally
            drawn to frontend development and continue to pursue it by learning the latest frameworks and technologies
            used by the industry.
          </Typography>
          <Typography variant="body2">Some of the technologies I enjoy working with are:</Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TechList technologies={['JavaScript (ES6)', 'React', 'TypeScript', 'CSS & HTML']} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TechList technologies={['Redux', 'Material UI', 'Express', 'Node.js']} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
