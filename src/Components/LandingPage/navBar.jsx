import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import styled from "@emotion/styled";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  transition: all 0.3s ease;
  z-index: 99995;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Nunito",
  },
  appbarTitle: {
    flexGrow: "1",
    color: "rgb(223, 82, 64)",
  },
  icon: {
    fontSize: "2rem",
  },
}));
export default function NavBar() {
  const classes = useStyles();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Nav className={navbar ? "bgactive" : null} id="navBar">
      <Toolbar>
        <h1 className={classes.appbarTitle}>
          Poke<span className={classes.colorText}>dex.</span>
        </h1>
        <IconButton>
          <SortIcon className={classes.icon} />
        </IconButton>
      </Toolbar>
    </Nav>
  );
}
