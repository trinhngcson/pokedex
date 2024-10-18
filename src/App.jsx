import { useState } from "react";
import Headers from "./components/Headers";
import SideNav from "./components/SideNav";
import { PokeCard } from "./components/PokeCard";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(true);
  function handleShowSideMenu() {
    setShowSideMenu(!showSideMenu);
  }
  function handleHideMenu() {
    setShowSideMenu(true);
  }
  return (
    <>
      <Headers handleShowSideMenu={handleShowSideMenu} />
      <SideNav
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        showSideMenu={showSideMenu}
        handleHideMenu={handleHideMenu}
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
