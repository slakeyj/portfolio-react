import React from 'react';
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Home />
    </ThemeProvider >
  );
}

export default App;
