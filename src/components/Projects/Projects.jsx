import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import loginImage from './clij.png';
import createTrip from './create-trip.png';
import trivia from './trivia.png';
import calculator from './calculator.png';

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 375,
    marginTop: '4em',
  },
});

const ProjectCard = ({ image, title, description, visitHref, githubHref }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box display='flex' flexDirection='column' height='100%'>
        <CardMedia
          component='img'
          alt={title}
          height='140'
          image={image}
          title={title}
        />
        <Box flexGrow={1}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </Box>
        <CardActions>
          <Button href={visitHref} size='large' color='primary'>
            Visit
          </Button>
          <Button href={githubHref} size='large' color='primary'>
            Github
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

const Projects = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify='center'>
        <Grid item>
          <Typography variant='subtitle1'>Projects</Typography>
        </Grid>
      </Grid>
      <Grid container direction='row' spacing={8} justify='center'>
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
          <Card className={classes.root}>
            <CardMedia
              alt='trip up'
              component='img'
              height='140'
              image={createTrip}
              title='trip up create trip'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Trip Up API
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                An API to help plan and coordinate group trips
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href='https://github.com/trip-up/trip-up'
                size='large'
                color='primary'
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Star Wars Games */}
        <Grid item>
          <Card className={classes.root}>
            <CardMedia
              component='img'
              alt='star wars trivia'
              height='140'
              image={trivia}
              title='star wars trivia'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Star Wars Games
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                A Star Wars themed game site that allows users to compare their
                high scores
              </Typography>
            </CardContent>
            <Button
              href='http://star-wars-games.herokuapp.com/'
              size='large'
              color='primary'
            >
              Visit
            </Button>
            <Button
              href='https://github.com/CF-Jass/project-week'
              size='large'
              color='primary'
            >
              Github
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
