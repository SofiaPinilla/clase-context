import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
  characters: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    const getCharacters = async () => {
        const res = await axios.get("https://rickandmortyapi.com/api/character");
        // setCharacter(res.data)
        dispatch({
          type: "GET_CHARACTERS",
          payload: res.data.results,
        });
      };

      const searchCharacters = async(text)=>{
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${text}`);
        dispatch({
          type: "GET_CHARACTERS",
          payload: res.data.results,
        });
      }
    
      return (
        <GlobalContext.Provider
          value={{
            characters: state.characters,
            getCharacters,
            searchCharacters
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    };
    