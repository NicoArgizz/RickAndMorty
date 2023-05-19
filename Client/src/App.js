import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards/Cards.jsx";
import BarraNav from "./components/BarraNav/BarraNav";
import axios from "axios";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form/Form";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";

const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation();

  // const EMAIL = "hola@hola.com";
  // const PASSWORD = "1234";

  // const login = (userData) => {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;

      setAccess(access);
      access && navigate("/home");

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const isCharaterAlreadyAdded = characters.some(
        (character) => character.id === Number(id)
      );

      if (isCharaterAlreadyAdded) {
        alert("¡Este personaje ya ha sido agregado");
      } else {
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );

        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      }

    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {pathname !== "/" && <BarraNav onSearch={onSearch}></BarraNav>}
      <Routes>
        <Route path="/" element={<Form onSubmit={login}></Form>}></Route>
        <Route
          path="/home"
          element={
            <Cards characters={characters} onClose={onClose} className="home" />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        {/* */}
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
      </Routes>
    </div>
  );
}

export default App;
