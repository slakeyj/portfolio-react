import React from 'react';
import profile from './profile.jpg';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    width: '100%',
    height: 'auto',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={9} sm={5} md={4} lg={3}>
          <Box m={4}>
            <Avatar src={profile} alt="Profile" className={classes.avatar} />
          </Box>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography color="secondary" variant="h3" component="h2" align="center" noWrap>
            Susanna Lakey
          </Typography>
          <Typography color="error" variant="subtitle2" component="h2" align="center">
            Frontend Software Developer
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <Box display="flex" justifyContent="space-evenly" my={3}>
            <Link href="https://www.linkedin.com/in/susanna-lakey/">
              <LinkedInIcon color="error" />
            </Link>
            <Link href="https://github.com/slakeyj">
              <GitHubIcon color="error" />
            </Link>
            <Link href="https://twitter.com/susannalakey">
              <TwitterIcon color="error" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
