import styles from "./Turno.module.css";

export const Turno = ({ date, time, userId }) => {
  return (
    <div className={styles.cajaTurno}>
      <h2>La fecha del turno es: {date}</h2>
      <h2>La hora del turno es: {time}</h2>
      <h2>El id del usuario que saco el turno es: {userId}</h2>
    </div>
  );
};
