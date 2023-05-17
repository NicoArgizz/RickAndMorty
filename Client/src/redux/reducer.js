import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  filteredCharacters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      let deleteCharacter = state.myFavorites.filter(
        (character) => character.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: deleteCharacter,
      };
    case FILTER:
      const filteredCharacters = state.myFavorites.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: [...filteredCharacters],
      };
    case ORDER:
      const orderCharacters = [...state.myFavorites];
      if (action.payload === "A") {
        orderCharacters.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        orderCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: orderCharacters,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
