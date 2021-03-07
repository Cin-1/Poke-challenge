import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  root: {
    fontSize: "40px",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} color="secondary">
      LandingPage Roboto
    </Typography>
  );
};

export default Landing;
