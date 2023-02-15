import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Characters = () => {
  const { characters, getCharacters } = useContext(GlobalContext);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return <div key={character.id}>{character.name}
        <img src={character.image} alt="image" />
        </div>;
      })}
    </div>
  );
};

export default Characters;
