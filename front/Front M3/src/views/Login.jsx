import { useState } from "react";
import { validate } from "../helpers/validate";
import axios from "axios";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  console.log(userLogin);

  const [errors, setErrors] = useState({});
  //   console.log(errors);

  const handlerInputChange = (event) => {
    const { name, value } = event.target;
    const newUserData = {
      ...userLogin,
      [name]: value,
    };

    setUserLogin(newUserData);
    setErrors(validate(newUserData));
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const hayInputsVacios = Object.values(userLogin).some((value) => value.trim() === "");

    if (hayInputsVacios || Object.keys(errors).length) {
      return alert("Debes llenar los campos correctamente");
    } else {
      console.log("Datos a enviar:", userLogin);
      axios
        .post("http://localhost:3000/users/login", userLogin)
        .then(() => {
          alert("Credenciales correctas, Bienvenido!");
        })
        .catch((error) => {
          console.error("Error al hacer el login:", error);
          alert("Hubo un error con las credenciales");
        });
    }
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h2>Login de Usuario </h2>

        {/*  Username */}
        <div>
          <label>Nombre de Usuario</label>
          <input type="text" value={userLogin.username} name="username" onChange={handlerInputChange} />
          {errors.username && <p style={{ color: "red" }}>{errors.username} </p>}
        </div>
        {/* password */}
        <div>
          <label>Contraseña</label>
          <input type="password" value={userLogin.password} name="password" onChange={handlerInputChange} />
          {errors.password && <p style={{ color: "red" }}>{errors.password} </p>}
        </div>
        <button type="submit">Ingresar a la pagina</button>
      </form>
    </>
  );
};

export default Login;
