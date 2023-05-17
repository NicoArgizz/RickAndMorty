const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});
//router.get("/character/:id", getCharById); ES LO MISMO QUE LO DE ARRIBA

router.get("/login", (req, res) => {
  login(req, res);
});
//router.get("/login", login); ES LO MISMO QUE LO DE ARRIBA

router.post("/fav", (req, res) => {
  postFav(req, res);
});
//router.post("/fav", postFav); ES LO MISMO QUE LO DE ARRIBA

router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});
//router.delete("/fav/:id", deleteFav); ES LO MISMO QUE LO DE ARRIBA

module.exports = router;