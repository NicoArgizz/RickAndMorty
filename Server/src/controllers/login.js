const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );

  // return userFound
  //   ? res.status(200).json({ access: true })
  //   : res.status(404).json({ access: false })

  //LINEAS 10 A 12 ES LO MISMO QUE 16 Y 17

  if (userFound) return res.status(200).json({ access: true });
  return res.status(404).json({ access: false });
};

module.exports = {
  login,
};
