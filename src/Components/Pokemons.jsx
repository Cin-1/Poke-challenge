import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import useDarkMode from "use-dark-mode";
import Pokedex from "./Pokedex/Pokedex";
import { getPokemons, getPokemonData } from "../api";

const Pokemons = () => {
  const [t, i18n] = useTranslation("global");
  const darkMode = useDarkMode(false);
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(5, 5 * page);
      const promises = data.results.map(async (poke) => {
        return await getPokemonData(poke.url);
      });
      const results = await Promise.all(promises);
      setPokemon(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 5));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);
  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
      <p>{t("header.hello")}</p>
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
      <div>
        <Pokedex
          pokemons={pokemon}
          page={page}
          setPage={setPage}
          total={total}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Pokemons;
