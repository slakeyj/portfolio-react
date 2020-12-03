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
          width: '300px',
          height: '300px',
        }}
      />
    </Box>
    <Typography variant='subtitle1' component='h2'>
      <Box fontSize='3rem'>Susanna Lakey</Box>
    </Typography>
    <Typography variant='subtitle2' component='h2'>
      <Box fontSize='1.5rem'>Frontend Software Developer</Box>
    </Typography>
    <Box display='flex' mt={2}>
      <Box display='inline' my={1} mx={4}>
        <Link href='https://www.linkedin.com/in/susanna-lakey/'>
          <LinkedInIcon />
        </Link>
      </Box>
      <Box display='inline' my={1} mx={4}>
        <Link href='https://github.com/slakeyj'>
          <GitHubIcon />
        </Link>
      </Box>
      <Box display='inline' my={1} mx={4}>
        <Link href='https://twitter.com/susannalakey'>
          <TwitterIcon />
        </Link>
      </Box>
    </Box>
  </Box>
);

export default Home;
