import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import profile from '../Home/profile.jpg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Cell = ({ children }) => (
  <Box m={6} mx={40} fontSize={18}>
    {children}
  </Box>
);

const imageSize = '30%';

const About = () => {
  return (
    <>
      <Cell>
        <Avatar
          alt='Profile'
          src={profile}
          style={{
            width: '300px',
            height: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </Cell>

      <Cell>
        <Typography color='secondary' variant='subtitle1' component='h1'>
          Hello!
        </Typography>

        <Typography paragraph={true} gutterBottom={true}>
          I'm Susanna Lakey and I'm a frontend software developer. I come from a
          background in animal care, having worked and volunteered at animal
          shelters in the Seattle area.
        </Typography>
        <Button variant='contained' color='secondary'>
          Resume
        </Button>
      </Cell>
    </>
  );
};

export default About;
