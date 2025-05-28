import { useState } from "react";
import { validateRegister } from "../../helpers/validate";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();

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
    setErrors(validateRegister(newUserData));
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const hayInputsVacios = Object.values(userRegister).some((value) => value.trim() === "");

    if (hayInputsVacios || Object.keys(errors).length) {
      return Swal.fire({
        title: "Algo anda mal",
        text: "Debes llenar todos los campos correctamente",
        icon: "warning",
      });
    } else {
      console.log("Datos a enviar:", userRegister);
      axios
        .post("http://localhost:3000/users/register", userRegister)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire({
              title: "Registro enviado correctamente",
              text: "Ya puedes hacer el logeo",
              icon: "success",
            });

            navigate("/");
          }
        })
        .catch((err) => {
          console.error("Error al registrar usuario:", err);
          if (err.response.data.error.includes("email")) {
            Swal.fire({
              text: "Ya existe un usuario con ese Email",
              icon: "error",
            });
          } else if (err.response.data.error.includes("nDni")) {
            Swal.fire({
              text: "Ya existe un usuario con ese numero de DNI",
              icon: "error",
            });
          } else if (err.response.data.error.includes("El usuario con username")) {
            Swal.fire({
              text: "Ese Username ya esta en uso",
              icon: "error",
            });
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handlesubmit} className={styles.cajaForm}>
        <h2>Registro de Usuario</h2>
        {/*  Nombre de usuario */}
        <div className={styles.cajaInput}>
          <label>Nombre: </label>
          <input type="text" value={userRegister.name} name="name" onChange={handlerInputChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name} </p>}
        </div>
        {/*  Email */}
        <div className={styles.cajaInput}>
          <label>Email: </label>
          <input type="email" value={userRegister.email} name="email" onChange={handlerInputChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email} </p>}
        </div>
        {/*  birthdate */}
        <div className={styles.cajaInput}>
          <label>Fecha de nacimiento: </label>
          <input type="date" value={userRegister.birthdate} name="birthdate" onChange={handlerInputChange} />
          {errors.birthdate && <p style={{ color: "red" }}>{errors.birthdate} </p>}
        </div>
        {/* Dni */}
        <div className={styles.cajaInput}>
          <label>Numero de Dni: </label>
          <input type="number" value={userRegister.nDni} name="nDni" onChange={handlerInputChange} />
          {errors.nDni && <p style={{ color: "red" }}>{errors.nDni} </p>}
        </div>
        {/*  Username */}
        <div className={styles.cajaInput}>
          <label>Nombre de Usuario: </label>
          <input type="text" value={userRegister.username} name="username" onChange={handlerInputChange} />
          {errors.username && <p style={{ color: "red" }}>{errors.username} </p>}
        </div>
        {/* password */}
        <div className={styles.cajaInput}>
          <label>Contraseña: </label>
          <input type="text" value={userRegister.password} name="password" onChange={handlerInputChange} />
          {errors.password && <p style={{ color: "red" }}>{errors.password} </p>}
        </div>
        <button type="submit" className={styles.buttonInput}>
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Register;
