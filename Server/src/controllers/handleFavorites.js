let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);
  //el + se usa para pasar el id a número antes de compararlo. Porque sino queda como string.


  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav
}
