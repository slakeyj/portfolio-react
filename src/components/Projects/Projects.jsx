import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import loginImage from './clij.png';
import createTrip from './create-trip.png';
import trivia from './trivia.png';
import calculator from './calculator.png';
import planIt from './plan-it.png';

const Projects = () => {
  return (
    <>
      <Grid container justify='center'>
        <Grid item>
          <Typography color='secondary' variant='subtitle1'>
            Projects
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction='row' spacing={8} justify='center'>
        {/* Plan It */}
        <Grid item>
          <ProjectCard
            title='Plan It'
            image={planIt}
            description='A to-do app built with TypeScript, React, and Material UI'
            visitHref='https://github.com/slakeyj/to-do-typescript'
            githubHref='https://github.com/slakeyj/to-do-typescript'
          />
        </Grid>
        {/* Calculator */}
        <Grid item>
          <ProjectCard
            title='Calculator'
            image={calculator}
            description='A basic calculator built with React'
            visitHref='https://slakeyj.github.io/calculator/'
            githubHref='https://github.com/slakeyj/calculator'
          />
        </Grid>
        {/* CLIJ */}
        <Grid item>
          <ProjectCard
            title="Coder's Living Instant Journal"
            image={loginImage}
            description='An application that allows a user to create, read, update, and delete categorized journals from their terminal and the web app at cli-journal.web.app'
            visitHref='https://cli-journal.web.app/'
            githubHref='https://github.com/Coders-Living-Instant-Work-Journal'
          />
        </Grid>

        {/* Trip Up */}
        <Grid item>
          <ProjectCard
            title='Trip Up API'
            image={createTrip}
            description='An API to help plan and coordinate group trips'
            visitHref='https://github.com/trip-up/trip-up'
            githubHref='https://github.com/trip-up/trip-up'
          />
        </Grid>

        {/* Star Wars Games */}
        <Grid item>
          <ProjectCard
            title='Star Wars Games'
            image={trivia}
            description='A Star Wars themed game site that allows users to compare their
            high scores'
            visitHref='http://star-wars-games.herokuapp.com/'
            githubHref='https://github.com/CF-Jass/project-week'
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
