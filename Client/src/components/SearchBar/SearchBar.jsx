import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value)
  }

   return (
     <div>
       <input className={styles.searchBar} type="search" placeholder="Buscar personaje" onChange={handleChange} value={id}/>
       <button className={styles.agregarButton} onClick={() => { onSearch(id); setId('') }}>
         Agregar
       </button>
     </div>
   );
}
