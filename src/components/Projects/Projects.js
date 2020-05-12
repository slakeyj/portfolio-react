import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import loginImage from './clij.png'
import createTrip from './create-trip.png'
import trivia from './trivia.png'

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 340,
    marginTop: '5em'
  },
  media: {
    height: 140,
  },
  cardActionsStyles: {
    height: '20%',
    position: 'absolute'
  }
});


const Projects = () => {
  const classes = useStyles();

  return (
    <>

      {/* CLIJ */}
      <Grid container justify="center">
        <Grid item >
          <h1>Projects</h1>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={10} justify="center">
        <Grid item >
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
              <a target="_blank" href="https://cli-journal.web.app/">
                <Button size="small" color="primary">
                  Visit
                </Button>
              </a>
              <a target="_blank" href="https://github.com/Coders-Living-Instant-Work-Journal">
                <Button size="small" color="primary">
                  Github
                </Button>
              </a>
            </CardActions>
          </Card >
        </Grid>

        {/* Trip Up */}
        <Grid item >
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
            <CardActions className={classes.cardActionsStyles}>


              <a target="_blank" href="https://github.com/trip-up/trip-up">
                <Button size="small" color="primary">
                  Github
              </Button>
              </a>
            </CardActions>
          </Card >
        </Grid>

        {/* Star Wars Games */}
        <Grid item >
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
            <CardActions className={classes.cardActionsStyles}>
              <a target="_blank" href="http://star-wars-games.herokuapp.com/">
                <Button size="small" color="primary">
                  Visit
              </Button>
              </a>
              <a target="_blank" href="https://github.com/CF-Jass/project-week">
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