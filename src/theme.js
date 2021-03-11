import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#468faf',
    },
    error: {
      main: '#5e6472',
    },
  },
  typography: {
    fontFamily: 'Arial',
    subtitle1: {
      fontFamily: 'Satisfy, cursive',
      fontSize: '4rem',
    },
    subtitle2: {
      fontFamily: 'Merriweather Sans, sans-serif',
      fontSize: '1.2rem',
      fontWeight: 600,
      letterSpacing: '1.8px',
    },
    body1: {
      fonSize: '8px',
    },
    body2: {
      fontFamily: 'Quattrocento',
      fontSize: '1.1em',
    },
    h1: {
      fontSize: '1em',
    },
    h3: {
      fontFamily: 'Satisfy, cursive',
      fontSize: '3.8rem',
    },
    h6: {
      fontFamily: 'Bowlby One SC, cursive',
      fontSize: '1.7em',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
