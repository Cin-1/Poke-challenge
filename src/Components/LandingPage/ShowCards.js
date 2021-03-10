import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LangCard from "./LangCard";
import ColorCard from "./ColorCard";
import data from "../../static/data";
import useWindowPosition from "../../hook/useWindowPosition";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "1.5rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "2rem",
    textDecoration: "none",
  },
  size: {
    fontSize: "26px",
    marginBottom: "1rem",
  },
}));
export default function ColorLang() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className={classes.root} id="select-option">
        <ColorCard data={data[0]} checked={checked} />
        <ColorCard data={data[1]} checked={checked} />
        <LangCard data={data[2]} checked={checked} />
        <LangCard data={data[3]} checked={checked} />
      </div>
      <div className={classes.button}>
        <Link to="/pokemons">
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.size}
          >
            {t("main.button")}
          </Button>
        </Link>
      </div>
    </>
  );
}
