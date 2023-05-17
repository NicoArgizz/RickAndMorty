import { connect } from "react-redux";
import Card02 from "../Card/Card02";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({ myFavorites, filteredFavorites }) => {
  // const myFavorites = props
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    setAux(!aux);
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <h1 className="text-white">Favorites</h1>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>

      <div className=" d-flex flex-column flex-md-row justify-content-around align-items-center flex-wrap">


        {myFavorites?.map((character) => {
          return (
            <Card02
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              // origin={character.origin.name}
              image={character.image}
              onClose={character.onClose}
              // className={character.styles.container}
            ></Card02>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    filteredFavorites: state.filteredFavorites
  };
};

export default connect(mapStateToProps, null)(Favorites);
