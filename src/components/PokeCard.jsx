import React, { useEffect, useState } from "react";
import { getFullPokedexNumber, getPokedexNumber } from "../utils";
import TypeCard from "./TypeCard";

export const PokeCard = (props) => {
  const { selectedPokemon } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { name, height, abilities, stats, types, moves, sprites } = data || {};

  useEffect(() => {
    if (loading || !localStorage || data) {
      return;
    }
    let cache = {};
    if (localStorage.getItem("pokedex")) {
      cache = JSON.parse(localStorage.getItem("pokedex"));
    }
    if (selectedPokemon in cache) {
      setData(cache[selectedPokemon]);
      return;
    }
    async function fetchPokemonData() {
      setLoading(true);
      try {
        const baseUrl = "https://pokeapi.co/api/v2/";
        const suffix = "pokemon/" + getPokedexNumber(selectedPokemon);
        const findUrl = baseUrl + suffix;
        const res = await fetch(findUrl);
        const pokemonData = await res.json();
        setData(pokemonData);
        console.log(pokemonData);
        cache[selectedPokemon] = pokemonData;
        localStorage.setItem("pokedex", JSON.stringify(cache));
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemonData();
  }, [selectedPokemon]);

  if (loading || !data) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }
  const imgList = Object.keys(sprites || {}).filter((val) => {
    if (!sprites[val]) {
      return false;
    }
    if (["versions", "other"].includes(val)) {
      return false;
    }
    return true;
  });
  return (
    <div className="poke-card">
      <div>
        <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
        <h2>{name}</h2>
      </div>
      <div className="type-container">
        {types.map((typeObj, typeIndex) => {
          return <TypeCard key={typeIndex} type={typeObj?.type?.name} />;
        })}
      </div>
      <img
        className="default-img"
        src={"/pokemon/" + getFullPokedexNumber(0) + ".png"}
        alt={`${name}-img`}
      />
      <div className="img-container">
        {imgList.map((spriteUrl, spriteKey) => {
          const imgUrl = sprites[spriteUrl];
          return (
            <img key={spriteKey} src={imgUrl} alt={`${name}-${`spriteUrl`}`} />
          );
        })}
      </div>
      <h3>Stats</h3>
      <div className="stats-card">
        {stats.map((statObj, statIndex) => {
          const { stat, base_stat } = statObj;
          return (
            <div key={statIndex} className="stat_item">
              <p>{stat?.name.replaceAll("-", " ")}</p>
              <h4>{base_stat}</h4>
            </div>
          );
        })}
      </div>
      <h3>Moves</h3>
      <div className="pokemon-move-grid">
        {moves.map((moveObj, moveIndex) => {
          return (
            <button className="button-card pokemon-move" key={moveIndex}>
              <p>{moveObj?.move?.name.replaceAll("-", " ")}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
