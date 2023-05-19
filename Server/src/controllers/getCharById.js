const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    if (!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`);
    
    //esto sería como un 'else' del 'if' de arriba
    const character = {
      key: data.id,
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
    return res.status(200).json(character);
    // return res.status(404).send("Not found");

  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.response.data.error); // 'error.response.data.error' es el error que tira la API
  }
};

module.exports = {
  getCharById,
};
