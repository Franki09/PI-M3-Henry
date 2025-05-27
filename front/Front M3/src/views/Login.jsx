import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { validateLogin } from "../helpers/validate";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validate: validateLogin,
    onSubmit: (values) => {
      axios
        .post("http://localhost:3000/users/login", values)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("user", JSON.stringify(res.data.user));

            Swal.fire({
              icon: "success",
              title: "Todo en orden!",
              text: "Bienvenido a la pagina",
            });

            navigate("/home");
          }
        })
        .catch((err) => {
          console.log(err);

          if (err.status === 400) {
            Swal.fire({
              icon: "error",
              title: `${err.response.data.error}`,
              text: "Intentelo de nuevo",
            });
          }
        });
    },
  });

  const handleOnClick = () => {
    navigate("/register");
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h2>Login de Usuario </h2>

        {/*  Username */}
        <div>
          <label>Nombre de Usuario</label>
          <input type="text" value={formik.values.username} name="username" onChange={formik.handleChange} />
          {formik.errors.username && <p style={{ color: "red" }}>{formik.errors.username} </p>}
        </div>
        {/* password */}
        <div>
          <label>Contraseña</label>
          <input type="password" value={formik.values.password} name="password" onChange={formik.handleChange} />
          {formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password} </p>}
        </div>
        <button type="submit">Ingresar a la pagina</button>
      </form>

      <h2>Todavia no te registraste?</h2>
      <div>
        <h3>Toca aqui para hacer el registro ➡️</h3>
        <button onClick={handleOnClick}>Registrarse</button>
      </div>
    </>
  );
};

export default Login;
