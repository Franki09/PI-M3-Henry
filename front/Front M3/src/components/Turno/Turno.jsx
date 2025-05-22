import styles from "./Turno.module.css";

export const Turno = ({ id, date, time, status }) => {
  return (
    <div className={styles.cajaTurno}>
      <h2>
        {" "}
        Id del turno: <strong>{id}</strong>
      </h2>
      <h2>
        Fecha: <strong>{date}</strong>
      </h2>
      <h2>
        Horario: <strong>{time}</strong>
      </h2>
      <h2>
        Estado el turno: <strong>{status}</strong>
      </h2>
    </div>
  );
};
