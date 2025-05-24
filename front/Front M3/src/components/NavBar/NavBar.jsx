import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.fondo}>
      <span>Home</span>
      <span>Mis Turnos</span>
      <span>Cerrar Sesion</span>
    </div>
  );
};

export default NavBar;
