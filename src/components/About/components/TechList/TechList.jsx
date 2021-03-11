import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const TechList = ({ technologies }) => (
  <List>
    {technologies.map((technology) => (
      <ListItem key={technology}>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary={technology} />
      </ListItem>
    ))}
  </List>
);

export default TechList;
