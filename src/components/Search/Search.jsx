import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import Characters from "../Characters/Characters";

const Search = () => {
  const { text } = useParams();
  const { searchCharacters } = useContext(GlobalContext);
  useEffect(() => {
    searchCharacters(text);
  }, [text]);

  return <div><Characters/></div>;
};

export default Search;
