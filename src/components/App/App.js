import React from 'react';
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme';
import About from '../About/About';
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>

      </Router>
      <Footer />
    </ThemeProvider >
  );
}

export default App;
