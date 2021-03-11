import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <div>
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
              <div className={classes.grid}>
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

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    maxWidth: "1000px",
    margin: "20px auto",
    paddingBottom: "20px",
  },
  grid: {
    [theme.breakpoints.up("md")]: {
      display: "grid",
      padding: "0px 10px",
      gridTemplateColumns: "auto auto",
      gridGap: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      padding: "0px 7px",
      gridTemplateColumns: "auto",
      gridGap: "20px",
    },
  },
}));

export default Pokedex;
