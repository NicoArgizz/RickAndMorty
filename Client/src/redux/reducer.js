import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  filteredCharacters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const isCharacterAlreadyAdded = state.myFavorites.some((character) => character.id === action.payload.id);
      if (isCharacterAlreadyAdded) {
        return state;
      } else {
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.allCharacters, action.payload],
          filteredCharacters: [...state.filteredCharacters, action.payload]
        };
      }
    case REMOVE_FAV:
      let deleteCharacter = state.myFavorites.filter(
        (character) => character.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: deleteCharacter,
        allCharacters: deleteCharacter,
        filteredCharacters: deleteCharacter
      };
    case FILTER:
      if (action.payload === 'allCharacters') {
        return {
          ...state,
          filteredCharacters: state.myFavorites
        };
      } else {
        const filteredCharacters = state.myFavorites.filter(
          (character) => character.gender === action.payload
          );
          return {
            ...state,
            filteredCharacters: filteredCharacters
          };
        }
    case ORDER:
      const orderCharacters = [...state.filteredCharacters];
      if (action.payload === "A") {
        orderCharacters.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        orderCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        filteredCharacters: orderCharacters,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
