import { useEffect, useState } from "react";
import Turno from "../../components/Turno/Turno";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  console.log(turnos);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/appointments").then(({ data }) => {
      console.log("Respuesta del backend:", data.data);
      setTurnos(data.data);
    });
  }, []);

  const handleOnClick = () => {
    navigate("/crearTurno");
  };

  if (!turnos || turnos.length === 0) {
    return (
      <>
        <h2>No hay reservas registradas por el momento</h2>
        <div>
          <p>Quieres hacer una reserva? Clickea aqui ➡️</p>
          <button onClick={handleOnClick}>Hacer una Reserva</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Mis Reservas</h1>
        <h2>Estas son las reservas del usuario:</h2>

        <div>
          {turnos.map((turno) => {
            return <Turno key={turno.id} id={turno.id} date={turno.date} time={turno.time} status={turno.status} />;
          })}
        </div>
      </>
    );
  }
};

export default MisTurnos;
