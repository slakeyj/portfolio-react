import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

export default ProjectCard;
