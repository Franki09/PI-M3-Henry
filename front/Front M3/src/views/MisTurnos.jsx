import { useEffect, useState } from "react";
import Turno from "../components/Turno/Turno";
import axios from "axios";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  console.log(turnos);

  useEffect(() => {
    axios.get("http://localhost:3000/appointments").then(({ data }) => {
      console.log("Respuesta del backend:", data.data);
      setTurnos(data.data);
    });
  }, []);

  return (
    <>
      <h1>Mis turnos</h1>
      <h2>Estos son los turnos del usuario:</h2>

      <div>
        {turnos.map((turno) => {
          return <Turno key={turno.id} id={turno.id} date={turno.date} time={turno.time} status={turno.status} />;
        })}
      </div>
    </>
  );
};

export default MisTurnos;
