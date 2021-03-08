import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemons from "./Components/Pokemons";
import LandingPage from "./Components/LandingPage/LandingPage";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Providers/Theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
