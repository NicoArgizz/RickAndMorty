import { connect } from "react-redux";
import Card02 from "../Card/Card02";


const Favorites = ({ myFavorites }) => {
  // const myFavorites = props
  return (
    <>
      <h1 className="text-white">Favorites</h1>
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
  };
};

export default connect(mapStateToProps, null)(Favorites);
