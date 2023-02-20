import React, { useContext, useEffect } from "react";
import Characters from "../../components/Characters/Characters";
import { GlobalContext } from "../../context/GlobalState";

const Home = () => {
  const { getCharacters } = useContext(GlobalContext);
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <Characters />
    </div>
  );
};

export default Home;
