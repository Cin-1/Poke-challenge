import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "./images/poke1.jpg";
import Header from "./Header";
import ColorLang from "./ColorLang";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#FFD622",
    [theme.breakpoints.down("sm")]: {
      minHeight: "100vh",
      backgroundColor: "rgb(254, 88, 88)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "100vh",
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <ColorLang />
    </div>
  );
};

export default Landing;
