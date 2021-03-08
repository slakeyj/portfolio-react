import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import profile from '../Home/profile.jpg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Grid from '@material-ui/core/Grid';

const About = () => {
  return (
    <>
      <Container maxWidth='lg' disableGutters>
        <Grid container direction='row'>
          <Grid item xs={12} md={4}>
            <Box m={4}>
              <Avatar
                alt='Profile'
                src={profile}
                style={{
                  width: '400px',
                  height: '400px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box mx={15}>
              <Typography color='secondary' variant='subtitle1' component='h1'>
                Hello!
              </Typography>
            </Box>
            <Box mx={15}>
              <Typography
                paragraph={true}
                gutterBottom={true}
                component='p'
                variant='body2'
              >
                I'm Susanna Lakey and I'm a frontend software developer based in
                Seattle, WA. I come from a background in animal care, having
                worked and volunteered at animal shelters in the Seattle area.
              </Typography>

              <Typography
                paragraph={true}
                gutterBottom={true}
                component='p'
                variant='body2'
              >
                I decided it was time for a change in my life and gave software
                development a try. I found myself naturally drawn to frontend
                development and continue to pursue it by learning the latest
                frameworks and technologies used by the industry.
              </Typography>

              <Typography
                paragraph={true}
                gutterBottom={true}
                component='p'
                variant='body2'
              >
                Some of the technologies I enjoy working with are:
              </Typography>
              <Grid container direction='column' alignItems='center'>
                <Grid container item direction='row' justify='center'>
                  <Grid item xs={6}>
                    <List component='nav' aria-label='main mailbox folders'>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary='JavaScript (ES6)' />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary='React' />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary='TypeScript' />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary='CSS & HTML' />
                      </ListItem>
                    </List>
                  </Grid>

                  <Grid item xs={6}>
                    <List component='nav' aria-label='main mailbox folders'>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary='Redux' />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary='Material UI' />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary='Express' />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary='Node.js' />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
                <Grid item>
                  <Box my={4}>
                    <Button
                      variant='contained'
                      color='secondary'
                      href='/slakey-resume.pdf'
                    >
                      Resume
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
