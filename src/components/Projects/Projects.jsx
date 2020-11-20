import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
    // height: 340,
    marginTop: '4em',
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify='center'>
        <Grid item>
          <h1>Projects</h1>
        </Grid>
      </Grid>
      <Grid container direction='row' spacing={8} justify='center'>
        {/* Calculator */}
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='Calculator'
                height='140'
                image={calculator}
                title='calculator'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Calculator
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  A basic calculator built with React.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                href='https://slakeyj.github.io/calculator/'
                size='large'
                color='primary'
              >
                Visit
              </Button>
              <Button
                href='https://github.com/slakeyj/calculator'
                size='large'
                color='primary'
              >
                Github
              </Button>
              {/* </Grid> */}
            </CardActions>
          </Card>
        </Grid>

        {/* CLIJ */}
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                alt='coders living instant journal'
                image={loginImage}
                title='CLIJ'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Coder's Living Instant Journal
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  An application that allows a user to create, read, update, and
                  delete categorized journals from their terminal and the web
                  app at cli-journal.web.app
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href='https://cli-journal.web.app/'
                size='large'
                color='primary'
              >
                Visit
              </Button>
              <Button
                href='https://github.com/Coders-Living-Instant-Work-Journal'
                size='large'
                color='primary'
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Trip Up */}
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
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
            </CardActionArea>
            <CardActions className={classes.cardActionsStyles}>
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
            <CardActionArea>
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
                  A Star Wars themed game site that allows users to compare
                  their high scores
                </Typography>
              </CardContent>
            </CardActionArea>
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
