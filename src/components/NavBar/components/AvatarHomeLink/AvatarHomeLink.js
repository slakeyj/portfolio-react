import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ReactRouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  initials: {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    border: '3px solid #5e6472',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const AvatarHomeLink = () => {
  const classes = useStyles();
  return (
    <Link color="secondary" component={ReactRouterLink} to="/" underline="none">
      <Avatar className={classes.initials}>
        <Typography variant="h6">sl</Typography>
      </Avatar>
    </Link>
  );
};

export default AvatarHomeLink;
