import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import ColorLang from "./ShowCards";
import image2 from "./images/pokegroup.jpg";
import image1 from "./images/poke1.jpg";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  options: {
    [theme.breakpoints.down("sm")]: {
      minHeight: "100vh",
      backgroundImage: `url(${image1})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "100vh",
      backgroundImage: `url(${image2})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
}));

const Landing = () => {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <Header />
      <div className={classes.options}>
        <ColorLang />
      </div>
    </div>
  );
};

export default Landing;
