import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

const Details = (props) => {
  const { pokemon, open, handleClose } = props;
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");

  return (
    <Modal open={open} onClose={handleClose} className={classes.modalDisplay}>
      <div className={classes.paperModal}>
        <Box display="flex" justifyContent="flex-end" className={classes.x}>
          <Button onClick={() => handleClose()} size="small">
            X
          </Button>
        </Box>
        <div className={classes.title}>
          <h4>{pokemon.name}</h4>
        </div>
        <div className={classes.title}>
          <img src={pokemon.sprites.back_default} alt="minipoke" />
          <img src={pokemon.sprites.back_shiny} alt="minipoke" />
          <img src={pokemon.sprites.front_shiny} alt="minipoke" />
          <img src={pokemon.sprites.front_default} alt="minipoke" />
        </div>
        <div className={classes.title} p>
          <h5> {t("pokedex.stats")}</h5>
          <div className={classes.title}>
            {pokemon.stats.map((stat) => {
              return (
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  ml={13}
                  mr={12}
                  mb={1}
                >
                  <Box>
                    <h5>{stat.stat.name + ":"}</h5>
                  </Box>
                  <Box>
                    <h5>{stat.base_stat}</h5>
                  </Box>
                </Box>
              );
            })}
          </div>
        </div>
        <div className={classes.title}>
          <h5> {t("pokedex.Abilities")}</h5>
          <div className={classes.margin}>
            {pokemon.abilities.map((abiliti, id) => {
              return (
                <div>
                  <div key={id}>
                    <h5>{abiliti.ability.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
          <h5> {t("pokedex.Weight")}</h5>
          <div className={classes.margin}>
            {" "}
            <h5>{pokemon.weight} kg</h5>
          </div>
          <h5> {t("pokedex.Type")}</h5>
          <div className={classes.margin}>
            {pokemon.types.map((type, id) => {
              return (
                <div>
                  <div key={id}>
                    <h5>{type.type.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Box display="flex" justifyContent="center" className={classes.button}>
          <Button
            onClick={() => handleClose()}
            size="small"
            variant="contained"
          >
            {t("pokedex.close")}
          </Button>
        </Box>
      </div>
    </Modal>
  );
};

const useStyles = makeStyles((theme) => ({
  modalDisplay: {
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "90vh",
    borderRadius: "1rem",
  },
  paperModal: {
    position: "absolute",
    width: 550,
    background:
      "linear-gradient(90deg, rgba(69,159,179,1) 0%, rgba(18,219,185,1) 48%, rgba(19,212,233,1) 100%)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "1rem",
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  margin: {
    margin: "8px",
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  x: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
    },
  },
}));
export default Details;
