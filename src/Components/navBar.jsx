import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Toolbar } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import styled from "@emotion/styled";
import useSound from "use-sound";
import poke from "../Components/Media/poke.mp3";
import { Link } from "react-router-dom";
import MusicOffIcon from "@material-ui/icons/MusicOff";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Nunito",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  link: {
    textDecoration: "none",
    color: "rgb(220, 10, 45)",
  },
  icon: {
    fontSize: "2rem",
    color: "#000000",
  },
}));
export default function NavBar() {
  const classes = useStyles();
  const [navbar, setNavbar] = useState(false);
  const [play, { stop, isPlaying }] = useSound(poke);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const [state, setState] = useState({
    playing: false,
  });

  const startPlay = () => {
    play();
    setState({
      playing: true,
    });
  };
  const stopPlay = (e) => {
    stop();
    setState({
      playing: false,
    });
  };

  return (
    <Nav className={navbar ? "bgactive" : null} id="navBar">
      <Toolbar>
        <h1 className={classes.appbarTitle}>
          <Link to="/" className={classes.link}>
            Poke<span className={classes.colorText}>dex.</span>
          </Link>
        </h1>
        {state.playing ? (
          <IconButton>
            <MusicNoteIcon
              active={isPlaying}
              size={60}
              onClick={(e) => stopPlay(e)}
            />
          </IconButton>
        ) : (
          <IconButton>
            <MusicOffIcon size={60} onClick={(e) => startPlay()} />
          </IconButton>
        )}
      </Toolbar>
    </Nav>
  );
}
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  transition: all 0.3s ease;
  z-index: 99995;
`;
