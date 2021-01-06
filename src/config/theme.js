import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blueGrey900, white } from 'material-ui/styles/colors';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    textColor: blueGrey900,
    alternateTextColor: white,
    primary1Color: '#48C6EF',
    accent1Color: blueGrey900
  }
});

export default theme
