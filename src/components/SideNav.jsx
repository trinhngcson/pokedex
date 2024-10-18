import { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils";
const SideNav = (props) => {
  const { selectedPokemon, setSelectedPokemon, handleHideMenu, showSideMenu } =
    props;
  const [search, setSearch] = useState("");
  const filterPokemon = first151Pokemon.filter((val, index) => {
    if (getFullPokedexNumber(index).includes(search)) {
      return true;
    }
    if (val.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return true;
    }
    return false;
  });
  return (
    <nav className={" " + (!showSideMenu ? "open" : " ")}>
      <div className={"header " + (!showSideMenu ? "open" : " ")}>
        <button onClick={handleHideMenu} className="open-nav-button">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h1 className="text-gradient">POKEDEX</h1>
      </div>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
      />
      {filterPokemon.map((pokemon, pokemonIndex) => {
        const accPokemon = first151Pokemon.indexOf(pokemon);
        return (
          <button
            onClick={() => {
              setSelectedPokemon(accPokemon);
              handleHideMenu();
            }}
            key={pokemonIndex}
            className={
              "nav-card " +
              (pokemonIndex === selectedPokemon ? "nav-card-selected" : " ")
            }
          >
            <p>{getFullPokedexNumber(accPokemon)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
};

export default SideNav;
