import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(121, 201, 250)",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "Press Start 2P",
  },
});

export default theme;
