import { useState } from "react";
import Headers from "./components/Headers";
import SideNav from "./components/SideNav";
import { PokeCard } from "./components/PokeCard";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  return (
    <>
      <Headers />
      <SideNav
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
