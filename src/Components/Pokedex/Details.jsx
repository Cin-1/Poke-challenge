import React from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import "./details.css";
import { useTranslation } from "react-i18next";

const Details = (props) => {
  const { pokemon, show, showDetails, setShowDetails } = props;

  const closeDetails = () => {
    setShowDetails(!showDetails);
  };

  const [t, i18n] = useTranslation("global");

  return (
    show && (
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <div className="container">
            <div className="title">
              <Modal.Header>{pokemon.name}</Modal.Header>
            </div>
            <div className="images img-details">
              <img src={pokemon.sprites.back_default} alt="" />
              <img src={pokemon.sprites.back_shiny} alt="" />
              <img src={pokemon.sprites.front_shiny} alt="" />
              <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="details">
              <h3> {t("pokedex.stats")}</h3>
              <div className="stats">
                {pokemon.stats.map((stat, id) => {
                  return (
                    <div>
                      <div key={id}>
                        <span>{stat.stat.name}</span>
                        <ProgressBar
                          now={stat.base_stat}
                          max={255}
                          label={stat.base_stat}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="details">
              <h3> {t("pokedex.Abilities")}</h3>
              <div className="details-inside">
                {pokemon.abilities.map((abiliti, id) => {
                  return (
                    <div>
                      <div key={id}>
                        <span>{abiliti.ability.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h3> {t("pokedex.Weight")}</h3>
              <div className="details-inside"> {pokemon.weight} kg.</div>
              <h3> {t("pokedex.Type")}</h3>
              <div>
                {pokemon.types.map((type, id) => {
                  return (
                    <div>
                      <div key={id}>{type.type.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="button-close">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => closeDetails()}
              >
                {t("pokedex.close")}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    )
  );
};

export default Details;
