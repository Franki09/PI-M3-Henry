import { useNavigate } from "react-router-dom";
import styles from "./SinReservas.module.css";

const SinReservas = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/crearTurno");
  };

  return (
    <div className={styles.cajaSinReserva}>
      <h2>No hay reservas registradas por el momento</h2>
      <div className={styles.cajaConButton}>
        <p>Quieres hacer una reserva? Clickea aqui ➡️</p>
        <button onClick={handleOnClick} className={styles.button}>
          Hacer una Reserva
        </button>
      </div>
    </div>
  );
};

export default SinReservas;
