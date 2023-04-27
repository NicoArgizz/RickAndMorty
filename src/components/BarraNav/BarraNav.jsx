import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/logo.png";
import { Link, useLocation } from "react-router-dom";

const BarraNav = ({ onSearch }) => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="d-flex justify-content-center"
    >
      <img src={logo} alt="logo rick and morty" className="pb-2" />
      <Container fluid className="d-flex flex-column">
        <Navbar.Brand href="#" className="m-0 p-0"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Link to={"/home"}>
            <Button className="mx-2 my-2" variant="secondary">
              Home
            </Button>
          </Link>

          <Link to={"/about"}>
            <Button className="mx-2 my-2" variant="secondary">
              About
            </Button>
          </Link>

          <Link to={"/favorites"}>
            <Button className="mx-2 my-2" variant="secondary">
              Favorites
            </Button>
          </Link>

          <SearchBar onSearch={onSearch}></SearchBar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNav;
