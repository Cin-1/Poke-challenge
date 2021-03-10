import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemons from "./Components/Main";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./index.css";
import NavBar from "./Components/navBar";

function App() {
  return (
    <Router>
      <Route path="/">
        <NavBar />
      </Route>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/pokemons">
          <Pokemons />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
