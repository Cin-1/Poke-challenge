import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemons from "./Components/Pokemons";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./index.css";
import { theme, themeDk } from "./Providers/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { DarkContext } from "./Providers/stateDark";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [defaultTheme, setDefaultTheme] = useState(theme);
  useEffect(() => {
    if (darkMode) {
      setDefaultTheme(themeDk);
    } else {
      setDefaultTheme(theme);
    }
    console.log(defaultTheme);
  }, [darkMode]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <DarkContext.Provider value={{ darkMode, setDarkMode }}>
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
      </DarkContext.Provider>
    </ThemeProvider>
  );
}

export default App;
