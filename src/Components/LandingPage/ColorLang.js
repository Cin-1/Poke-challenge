import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import data from "../../static/data";
import useWindowPosition from "../../hook/useWindowPosition";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "2rem",
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <>
      <div className={classes.root} id="select-option">
        <ImageCard data={data[0]} checked={checked} />
        <ImageCard data={data[1]} checked={checked} />
        <ImageCard data={data[2]} checked={checked} />
        <ImageCard data={data[3]} checked={checked} />
      </div>
      <div className={classes.button}>
        <Button color="primary" variant="contained">
          GObgfctfgh!
        </Button>
      </div>
    </>
  );
}
