import { first151Pokemon, getFullPokedexNumber } from "../utils";
const SideNav = (props) => {
  const { selectedPokemon, setSelectedPokemon } = props;
  return (
    <nav>
      <div className={"header"}>
        <h1 className="text-gradient">POKEDEX</h1>
      </div>
      <input type="text" />
      {first151Pokemon.map((pokemon, pokemonIndex) => {
        return (
          <button
            key={pokemonIndex}
            className={
              "nav-card" +
              (pokemonIndex === selectedPokemon ? "nav-card-selected" : " ")
            }
          >
            <p>{getFullPokedexNumber(pokemonIndex)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
};

export default SideNav;
