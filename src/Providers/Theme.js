import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: green[300],
    },
    secondary: {
      main: grey[500],
    },
  },
  typography: {
    fontFamily: "Odibee Sans",
  },
});
export const themeDk = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: grey[500],
    },
    secondary: {
      main: "rgb(121, 201, 250)",
    },
  },
  typography: {
    fontFamily: "Odibee Sans",
  },
});
