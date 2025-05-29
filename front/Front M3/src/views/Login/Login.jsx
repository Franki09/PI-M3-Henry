import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { validateLogin } from "../../helpers/validate";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

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

            navigate("/");
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

  return (
    <div className={styles.cajaForm}>
      <form onSubmit={formik.handleSubmit}>
        <h1>Login de Usuario </h1>

        {/*  Username */}
        <div className={styles.cajaInput}>
          <label>Nombre de Usuario: </label>
          <input type="text" value={formik.values.username} name="username" onChange={formik.handleChange} />
          {formik.errors.username && <p style={{ color: "red" }}>{formik.errors.username} </p>}
        </div>
        {/* password */}
        <div className={styles.cajaInput}>
          <label>Contraseña: </label>
          <input type="password" value={formik.values.password} name="password" onChange={formik.handleChange} />
          {formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password} </p>}
        </div>
        <button type="submit" className={styles.buttonInput}>
          Ingresar a la pagina
        </button>
      </form>

      <h2>
        Todavia no te registraste?{" "}
        <Link to={"/register"} className={styles.link}>
          Registrarse
        </Link>
      </h2>
    </div>
  );
};

export default Login;
