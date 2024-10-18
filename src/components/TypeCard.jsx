import React from "react";
import { pokemonTypeColors } from "../utils";

const TypeCard = (props) => {
  const { type } = props;
  return (
    <div>
      <div
        className="type-tile"
        style={{
          color: pokemonTypeColors?.[type].color,
          background: pokemonTypeColors?.[type]?.background,
        }}
      >
        <p>{type}</p>
      </div>
      <div className="img-container"></div>
    </div>
  );
};

export default TypeCard;
