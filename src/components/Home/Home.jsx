import React from 'react';
import profile from './profile.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Home.css';

const useStyles = makeStyles({
  iconStyles: {
    margin: '2em',
    color: 'black',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Box m={4}>
        <Avatar
          src={profile}
          alt='Profile'
          style={{
            width: '300px',
            height: '300px',
          }}
        />
      </Box>
      <h1>Susanna Lakey</h1>
      <h2>Frontend Software Developer</h2>
      <Box display='flex'>
        <Box m={1}>
          <a
            href='https://www.linkedin.com/in/susanna-lakey/'
            className={classes.iconStyles}
          >
            <LinkedInIcon />
          </a>
        </Box>
        <Box display='inline' m={1}>
          <a href='https://github.com/slakeyj' className={classes.iconStyles}>
            <GitHubIcon />
          </a>
        </Box>
        <Box display='inline' m={1}>
          <a
            href='https://twitter.com/susannalakey'
            className={classes.iconStyles}
          >
            <TwitterIcon />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
