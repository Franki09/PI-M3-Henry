import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.fondo}>
      <Link to="/home">Home</Link>
      <Link to="/crearTurno">Crear Reservas</Link>
      <Link to="/misTurnos">Mis Reservas</Link>
      <button>Cerrar Sesion</button>
    </div>
  );
};

export default NavBar;
