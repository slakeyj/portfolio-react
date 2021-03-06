import React from 'react';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import theme from '../../theme';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/projects" component={Projects} exact />
          </Switch>
        </Router>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
