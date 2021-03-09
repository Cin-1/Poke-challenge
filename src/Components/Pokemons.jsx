import React, { useContext } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { DarkContext } from "../Providers/stateDark";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const Pokemons = () => {
  const { darkMode, setDarkMode } = useContext(DarkContext);
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <p>Desde pokemons</p>
      <p>{t("header.hello")}</p>
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            name="dark"
            onChange={() => setDarkMode(!darkMode)}
          />
        }
        label="Dark Mode"
      />
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={() => i18n.changeLanguage("es")}
      >
        espa!
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={() => i18n.changeLanguage("eng")}
      >
        ingles!
      </Button>
    </div>
  );
};

export default Pokemons;
