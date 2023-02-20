import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Characters = () => {
  const { characters } = useContext(GlobalContext);

  return (
    <div className="container d-flex flex-wrap justify-content-center mt-3">
      {characters.map((character) => {
        return (
          <div class="card bg-light mb-3 ms-3" key={character.id}>
            <div class="card-header">{character.name}</div>
            <div class="card-body">
              <h4 class="card-title">{character.status}</h4>
              <img src={character.image} alt="image" />{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
