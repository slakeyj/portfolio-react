import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333',
    },
  },
  typography: {
    fontFamily: 'Arial',
    subtitle1: {
      fontFamily: 'Satisfy, cursive',
      fontSize: '4rem',
    },
    subtitle2: {
      fontFamily: 'Old Standard TT, serif',
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
