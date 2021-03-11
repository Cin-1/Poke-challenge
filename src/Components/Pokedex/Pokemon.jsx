import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Details from "./Details";

const Pokemon = (props) => {
  const { pokemon } = props;
  const [open, setOpen] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box display="flex" pt={2} pl={4} boxShadow={3} className={classes.card}>
        <div>{pokemon.id} </div>
        <img
          src={pokemon.sprites.front_default}
          className={classes.img}
          alt={pokemon.name}
        />
      </Box>
      <div>
        <div className={classes.title}>
          <h3>{pokemon.name}</h3>
        </div>
        <Details
          pokemon={pokemon}
          open={open}
          onClose={handleClose}
          handleClose={handleClose}
        ></Details>
        <div>
          <Box display="flex" justifyContent="center" pt={1}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => handleOpen()}
            >
              {t("pokedex.info")}
            </Button>
          </Box>
        </div>
      </div>
    </Container>
  );
};

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgb( 212, 212, 212 )",
    borderRadius: "1rem",
    maxWidth: "320px",
    paddingLeft: "44px",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginBottom: "5px",
  },
  card: {
    borderRadius: "1rem",
    backgroundColor: "rgb(121, 201, 250)",
    maxWidth: "230px",
  },
  img: {
    width: "140px",
    height: "120px",
    marginRight: "15px",
  },
  title: {
    textTransform: "uppercase",
    marginTop: "12px",
    textAlign: "center",
  },
});

export default Pokemon;
