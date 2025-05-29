import { useNavigate } from "react-router-dom";

const SinReservas = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/crearTurno");
  };

  return (
    <>
      <h2>No hay reservas registradas por el momento</h2>
      <div>
        <p>Quieres hacer una reserva? Clickea aqui ➡️</p>
        <button onClick={handleOnClick}>Hacer una Reserva</button>
      </div>
    </>
  );
};

export default SinReservas;
