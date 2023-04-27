import { useState } from "react";

const Form = (props) => {
  const login = props.onSubmit;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    validate();
  };

  const validate = () => {
    if (!/\S+@\S+\.\S+/.test(userData.email)) {
      setErrors({
        ...errors,
        email: "Email inválido",
      });
    } else setErrors({ ...errors, email: "" });
  };

  const handleSumbmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form
      onSubmit={handleSumbmit}
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <div class="mb-3">
        <label htmlFor="email" class="form-label text-white fw-bolder">
          EMAIL
        </label>
        <input
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          type="email"
          placeholder="Ingresar E-mail"
          value={userData.email}
          onChange={handleChange}
        />
        <div id="emailHelp" class="form-text">
          {errors.email && (
            <p className="text-danger fw-bolder">{errors.email}</p>
          )}
        </div>
      </div>
      <div class="mb-3">
        <label
          htmlFor="password"
          class="form-label text-white fw-bolder shadow-sm"
        >
          PASSWORD
        </label>
        <input
          class="form-control"
          id="exampleInputPassword1"
          name="password"
          type="password"
          placeholder="Ingrese contraseña"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        class="btn btn-success"
        typeof="submit"
        disabled={
          !userData.email ||
          !userData.password ||
          errors.email | errors.password
        }
      >
        ENVIAR
      </button>
    </form>
  );
};

export default Form;
