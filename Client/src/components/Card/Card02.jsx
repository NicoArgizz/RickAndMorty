import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

const Card02 = (props) => {
  const {
    id,
    name,
    status,
    gender,
    species,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props); //evalua si isFav es false. Si es falso lo saca, si es true lo agrega.
    setIsFav(!isFav); //acá cambia el estado. Si estaba en falso lo pasa a true, y viceversa.

    //ES LO MISMO QUE ESTO
    // if (isFav) {
    //   setIsFav(false)
    //   removeFav(id)
    // }
    // else {
    //   setIsFav(true)
    //   addFav(props)
    // }
  };

  return (
    <Card className={`${styles.container} col-6 col-sm-4 col-md-3 col-lg-2`}>
      <Card.Img variant="top" src={image} />
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Card.Body className="d-flex flex-column justify-content-center">
        <Link to={`/detail/${id}`}>
          <Card.Title className="">
            <Button variant="dark" className="w-100">
              {name}
            </Button>
          </Card.Title>
        </Link>
        <Button variant="danger" onClick={() => onClose(id)}>
          Cerrar
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card02);
