import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import loginImage from './clij.png'
import createTrip from './create-trip.png'
import trivia from './trivia.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: '5em'
  },
  media: {
    height: 140,
  },
});


const Projects = () => {
  const classes = useStyles();

  return (
    <>

      {/* CLIJ */}

      <Grid container direction="row" spacing={10} justify="center">
        <Grid item spacing={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={loginImage}
                title="CLIJ"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Coder's Living Instant Journal
        </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application that allows a user to create, read, update, and delete categorized journals from their terminal and the web app at cli-journal.web.app

        </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="https://cli-journal.web.app/">
                <Button size="small" color="primary">
                  Visit
      </Button>
              </a>
              <a href="https://github.com/Coders-Living-Instant-Work-Journal">
                <Button size="small" color="primary">
                  Github
      </Button>
              </a>
            </CardActions>
          </Card >
        </Grid>

        {/* Trip Up */}
        <Grid item spacing={10}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={createTrip}
                title="trip up create trip"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Trip Up API
               </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An API to help plan and coordinate group trips

          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>


              <a href="https://github.com/trip-up/trip-up">
                <Button size="small" color="primary">
                  Github
              </Button>
              </a>
            </CardActions>
          </Card >
        </Grid>

        {/* Star Wars Games */}
        <Grid item spacing={10}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={trivia}
                title="star wars trivia"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Star Wars Games
             </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A Star Wars themed game site that allows users to compare their high scores


            </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="http://star-wars-games.herokuapp.com/">
                <Button size="small" color="primary">
                  Visit
              </Button>
              </a>
              <a href="https://github.com/CF-Jass/project-week">
                <Button size="small" color="primary">
                  Github
              </Button>
              </a>
            </CardActions>
          </Card >
        </Grid>
      </Grid>
    </>

  )
}


export default Projects;