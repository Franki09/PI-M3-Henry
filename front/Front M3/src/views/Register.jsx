import { useState } from "react";
import { validate } from "../helpers/validate";
import axios from "axios";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });
  console.log(userRegister);

  const [errors, setErrors] = useState({});
  //   console.log(errors);

  const handlerInputChange = (event) => {
    const { name, value } = event.target;
    const newUserData = {
      ...userRegister,
      [name]: value,
    };

    setUserRegister(newUserData);
    setErrors(validate(newUserData));
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const hayInputsVacios = Object.values(userRegister).some((value) => value.trim() === "");

    if (hayInputsVacios || Object.keys(errors).length) {
      return alert("Debes llenar todos los campos correctamente");
    } else {
      console.log("Datos a enviar:", userRegister);
      axios
        .post("http://localhost:3000/users/register", userRegister)
        .then(() => {
          alert("Usuario registrado con exito");
        })
        .catch((error) => {
          console.error("Error al registrar usuario:", error);
          alert("Hubo un error al registrar el usuario");
        });
    }
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h2>Registro de Usuario</h2>
        {/*  Nombre de usuario */}
        <div>
          <label>Nombre</label>
          <input type="text" value={userRegister.name} name="name" onChange={handlerInputChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name} </p>}
        </div>
        {/*  Email */}
        <div>
          <label>Email</label>
          <input type="email" value={userRegister.email} name="email" onChange={handlerInputChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email} </p>}
        </div>
        {/*  birthdate */}
        <div>
          <label>Fecha de nacimiento</label>
          <input type="date" value={userRegister.birthdate} name="birthdate" onChange={handlerInputChange} />
          {errors.birthdate && <p style={{ color: "red" }}>{errors.birthdate} </p>}
        </div>
        {/* Dni */}
        <div>
          <label>Numero de Dni</label>
          <input type="number" value={userRegister.nDni} name="nDni" onChange={handlerInputChange} />
          {errors.nDni && <p style={{ color: "red" }}>{errors.nDni} </p>}
        </div>
        {/*  Username */}
        <div>
          <label>Nombre de Usuario</label>
          <input type="text" value={userRegister.username} name="username" onChange={handlerInputChange} />
          {errors.username && <p style={{ color: "red" }}>{errors.username} </p>}
        </div>
        {/* password */}
        <div>
          <label>Contraseña</label>
          <input type="password" value={userRegister.password} name="password" onChange={handlerInputChange} />
          {errors.password && <p style={{ color: "red" }}>{errors.password} </p>}
        </div>
        <button type="submit">Registrase</button>
      </form>
    </>
  );
};

export default Register;
