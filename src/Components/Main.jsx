import React, { useEffect, useState } from "react";
import Pokedex from "./Pokedex/Pokedex";
import { getPokemons, getPokemonData } from "./Pokedex/Fetch";

const Pokemons = () => {
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
    <div style={{ paddingTop: "45px" }}>
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
