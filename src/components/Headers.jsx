import React from "react";

const Headers = (props) => {
  const { handleShowSideMenu } = props;
  return (
    <header>
      <button onClick={handleShowSideMenu} className="open-nav-button">
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="text-gradient">POKEDEX</h1>
    </header>
  );
};

export default Headers;
