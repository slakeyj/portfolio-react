import React from 'react';
import profile from './profile.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Home = () => (
  <Box display='flex' flexDirection='column' alignItems='center'>
    <Box m={4}>
      <Avatar
        src={profile}
        alt='Profile'
        style={{
          width: '350px',
          height: '350px',
        }}
      />
    </Box>
    <Box m={2}>
      <Typography color='secondary' variant='h3' component='h2'>
        <Box>Susanna Lakey</Box>
      </Typography>
      <Typography color='error' variant='subtitle2' component='h2'>
        <Box>Frontend Software Developer</Box>
      </Typography>
    </Box>
    <Box justifyContent='center' display='flex' s>
      <Box display='inline' my={1} mx={6}>
        <Link href='https://www.linkedin.com/in/susanna-lakey/'>
          <LinkedInIcon color='error' />
        </Link>
      </Box>
      <Box display='inline' my={1} mx={6}>
        <Link href='https://github.com/slakeyj'>
          <GitHubIcon color='error' />
        </Link>
      </Box>
      <Box display='inline' my={1} mx={6}>
        <Link href='https://twitter.com/susannalakey'>
          <TwitterIcon color='error' />
        </Link>
      </Box>
    </Box>
  </Box>
);

export default Home;
