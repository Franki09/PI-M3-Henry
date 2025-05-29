import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NavBar = ({ setUser, setDataFromBack }) => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    Swal.fire({
      title: "Estas seguro de Cerrar Sesion?",
      text: "Tendras que volver a loggearte si quieres acceder a la pagina",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero cerrar sesion",
      cancelButtonText: "No, quiero seguir en la pagina",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        localStorage.removeItem("appointments");
        Swal.fire({
          title: "Sesión cerrada",
          text: "Has cerrado sesión exitosamente.",
          icon: "success",
        }).then(() => {
          setUser(false);
          setDataFromBack(false);
          navigate("/");
        });
      }
    });
  };

  return (
    <div className={styles.fondo}>
      <Link to="/home">Home</Link>
      <Link to="/crearTurno">Crear Reservas</Link>
      <Link to="/misTurnos">Mis Reservas</Link>
      <button onClick={logOutHandler}>Cerrar Sesion</button>
    </div>
  );
};

export default NavBar;
