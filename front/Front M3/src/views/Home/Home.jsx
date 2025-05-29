import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import mozo from "../../assets/202-2025163_waiter-png-free-download-mozos-de-restaurante.png";

const Home = () => {
  return (
    <>
      <div className={styles.cajaHome}>
        <h1 className={styles.titulo}> ¡Bienvenido a Ricas Reservas!</h1>
        <h2>
          Aqui podras agendar reservas para venir a comer a nuestro restaurante. Ademas de eso, podras ver las reservas ya creadas y cancelarlas en
          caso de que algo haya salido mal. Entonces,{" "}
          <Link to={"/crearTurno"} className={styles.link}>
            {" "}
            ¿Empezamos?
          </Link>
        </h2>
      </div>
      <img src={mozo} alt="mozo" className={styles.img} />
    </>
  );
};

export default Home;
