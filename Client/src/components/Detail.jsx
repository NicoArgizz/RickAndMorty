import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import Image from "react-bootstrap/Image";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 ">
      <div className="p-5">
        {character.image && <Image src={character.image} alt={character.name} className="" rounded fluid/>}
      </div>
      <div className="text-white text-start">
      {character.name && <h1>{character.name}</h1>}
      {character.status && <p>Status: {character.status}</p>}
      {character.species && <p>Species: {character.species}</p>}
      {character.gender && <p>Gender: {character.gender}</p>}
      {character.origin && <p>Origin: {character.origin.name}</p>}
      </div>
    </div>
  );
};

export default Detail;
