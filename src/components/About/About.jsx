import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import profile from '../Home/profile.jpg';
import Typography from '@material-ui/core/Typography';

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
            width: imageSize,
            height: imageSize,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </Cell>

      <Cell>
        <Typography variant='subtitle1' component='h1'>
          Hello!
        </Typography>

        <Typography paragraph={true} gutterBottom={true}>
          I'm Susanna Lakey and I'm a frontend software developer. I come from a
          background in animal care, having worked and volunteered at animal
          shelters in the Seattle area.
        </Typography>

        <Typography paragraph={true} gutterBottom={true}>
          I decided it was time for a change in my life and found myself drawn
          to software development because of the satisfaction I get from solving
          challenging problems and the great potential of learning that it
          offers.
        </Typography>

        <Typography paragraph={true} gutterBottom={true}>
          In my work at the animal shelter I had the opportunity to work on a
          team and enjoyed the experience of learning from my coworkers and
          sharing my knowledge with them. I look forward to working with a
          company where I can solve challenging problems and to continue working
          in a collaborative team environment.{' '}
        </Typography>

        <Typography paragraph={true} gutterBottom={true}>
          <strong>Languages:</strong> JavaScript, TypeScript CSS, HTML5
        </Typography>

        <Typography paragraph={true} gutterBottom={true}>
          <strong>Technologies:</strong> React, Redux, Git, GitHub, MongoDB,
          Mongoose, Express, Node, VSCode, Material UI
        </Typography>
      </Cell>

      <Cell>
        <Typography variant='subtitle2' component='h2'>
          Experience
        </Typography>

        <Typography paragraph={true} gutterBottom={true}>
          <strong>Code Fellows | Teaching Assistant | Seattle, WA</strong>
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          May 2020 - October 2020
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          Code reviewing of student Javascript homework submissions for grading
          purposes. Mentoring students on good coding practices and problem
          solving abilities.
        </Typography>

        <Typography paragraph={true} gutterBottom={true}>
          <strong>MEOW Cat Rescue | Shelter Caregiver | Kirkland, WA</strong>
        </Typography>

        <Typography paragraph={true} gutterBottom={true}>
          October 2015 - July 2019
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          Communicated changes seen in animals to management and co-workers
          daily. Contributed to the development of an emergency response plan in
          the event of a medical emergency with a cat. Worked as a team to
          provide care to all cats within the shelter including administering
          medications. Trained new employees and volunteers to the standard
          required by the shelter.
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          <strong>
            Seattle Animal Shelter | Cat Team Volunteer | Seattle, WA
          </strong>
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          2013 - 2015
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          Worked with clients to guide them through the adoption process.
          Communicated with the volunteer team to ensure all cats were cared
          for.
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          <strong>
            Elements Therapeutic Massage | Massage Therapist | Seattle, WA
          </strong>
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          2010 - 2011
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          Worked with clients to develop a customized therapeutic plan. Recorded
          accurate documentation to fit the standard required for billing
          insurance.
        </Typography>
      </Cell>

      <Cell>
        <Typography variant='subtitle2' component='h2'>
          Education
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          <strong>Code Fellows | Seattle, WA | April 2020</strong>
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          Certificate - Advanced Software Development in Full-Stack JavaScript
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          <strong>Bellevue College | Bellevue, WA | 2014</strong>
        </Typography>
        <Typography paragraph={true} gutterBottom={true}>
          Associate of Arts and Sciences
        </Typography>
      </Cell>
    </>
  );
};

export default About;
