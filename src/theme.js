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
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '2px',
    },
    h3: {
      fontFamily: 'Satisfy, cursive',
      fontSize: '5.5rem',
    },
    h6: {
      fontFamily: 'Bowlby One SC, cursive',
      fontSize: '2.7em',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
