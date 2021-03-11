import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Collapse, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import image from "../Media/pokedex.gif";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "105vh",
    [theme.breakpoints.down("sm")]: {
      height: "98vh",
    },
  },
  colorText: {
    color: "rgb(220, 10, 45)",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10rem",
      marginLeft: "-35px",
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  },
  arrow: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
      color: "#000000",
    },
  },
  img: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1.5rem",
    },
  },
}));
export default function Header() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1200 } : {})}
        collapsedHeight={50}
      >
        <Box mt={-4}>
          <Grid container>
            <Grid container items sm={5}>
              <Box display="flex" alignItems="center" ml={10}>
                <h1 className={classes.title}>
                  {t("main.title")} <br />
                  {t("main.title2")}
                  <span className={classes.colorText}> {t("main.title3")}</span>
                </h1>
              </Box>
            </Grid>
            <Grid container items sm={7}>
              <img src={image} alt="pokedex" className={classes.img}></img>
            </Grid>
          </Grid>
        </Box>
        <Box align="center" mt={-12}>
          <Scroll to="select-option" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.arrow} />
            </IconButton>
          </Scroll>
        </Box>
      </Collapse>
    </div>
  );
}
