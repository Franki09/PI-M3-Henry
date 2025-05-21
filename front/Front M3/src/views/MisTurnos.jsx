import { arrayMisTurnos } from "../helpers/myAppointments";
import { useState } from "react";
import { Turno } from "../components/Turno/Turno";

export const MisTurnos = () => {
  const [turnos, setTurnos] = useState(arrayMisTurnos);

  console.log(turnos);

  return (
    <>
      <h1>Mis turnos</h1>
      <h2>Estos son los turnos del usuario:</h2>

      <div>
        {turnos.map((turno) => {
          return <Turno key={turno.id} date={turno.date} time={turno.time} userId={turno.userId} />;
        })}
      </div>
    </>
  );
};
