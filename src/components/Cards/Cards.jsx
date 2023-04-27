import Card02 from "../Card/Card02";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div
      className={`${styles.container} d-flex flex-column flex-md-row justify-content-around align-items-center flex-wrap`}    >
      {characters?.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card02
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
              className={styles.container}
            ></Card02>
          );
        }
      )}
    </div>
  );
}
