import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F28DA8'
    }
  },
  typography: {
    fontFamily: "Arial"
  }
});

export default theme