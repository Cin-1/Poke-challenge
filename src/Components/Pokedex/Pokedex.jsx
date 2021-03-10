import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import { Box } from "@material-ui/core";
import "./pokedex.css";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nexPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div className="contenedor">
      <div>
        <div className="full-card">
          {loading ? (
            <div>
              <div>
                <Box justifyContent="center" display="flex">
                  <span>Loading...</span>
                </Box>
              </div>
            </div>
          ) : (
            <>
              <div className="pokedex-grid">
                {pokemons.map((poke, id) => {
                  return <Pokemon pokemon={poke} key={poke.name} />;
                })}
              </div>
              <div>
                <Pagination
                  page={page + 1}
                  totalPages={total}
                  leftClick={lastPage}
                  rightClick={nexPage}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
