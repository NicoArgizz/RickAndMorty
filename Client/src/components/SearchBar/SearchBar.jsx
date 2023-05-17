import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(id);
    setId('');
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.searchBar}
        type="search"
        placeholder="Buscar personaje"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={id}
      />
      <button
        className={styles.agregarButton}
        onClick={() => {
          // onSearch(id);
          // setId("");
        }}
      >
        Agregar
      </button>
    </form>
  );
}
