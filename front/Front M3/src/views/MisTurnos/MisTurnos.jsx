import { useEffect, useState } from "react";
import Turno from "../../components/Turno/Turno";
import axios from "axios";
import SinReservas from "../../components/SinReservas/SinReservas";
import styles from "./MisTurnos.module.css";

const MisTurnos = ({ userId, dataFromBack }) => {
  const [turnos, setTurnos] = useState([]);
  console.log(turnos);

  useEffect(() => {
    if (!dataFromBack.dataFromBack) {
      axios
        .get(`http://localhost:3000/users/${userId}`)
        .then(({ data }) => {
          localStorage.setItem("appointments", JSON.stringify(data.data.appointments));
          setTurnos(JSON.parse(localStorage.getItem("appointments")));
          dataFromBack.setDataFromBack(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setTurnos(JSON.parse(localStorage.getItem("appointments")));
    }
  }, [userId, dataFromBack]);

  if (!turnos || turnos.length === 0) {
    return (
      <>
        <SinReservas />
      </>
    );
  } else {
    return (
      <>
        <div className={styles.intro}>
          <h1 className={styles.titulo}>Mis Reservas</h1>
          <h2>Estas son las reservas del usuario:</h2>
        </div>

        <div>
          {turnos.map((turno) => {
            return (
              <Turno
                key={turno.id}
                id={turno.id}
                date={turno.date}
                time={turno.time}
                status={turno.status}
                setDataFromBack={dataFromBack.setDataFromBack}
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default MisTurnos;
