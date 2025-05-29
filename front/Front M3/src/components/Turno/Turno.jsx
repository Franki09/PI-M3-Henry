import axios from "axios";
import styles from "./Turno.module.css";
import Swal from "sweetalert2";
import { useState } from "react";

const Turno = ({ id, date, time, status, setDataFromBack }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleOnClick = () => {
    Swal.fire({
      title: "Estas seguro de cancelar la Reserva?",
      text: "Esta accion no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cancelarla",
      cancelButtonText: "No, mantenerla",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.put(`http://localhost:3000/appointments/cancel/ ${id}`).then((res) => {
            console.log("Respuesta del backend:", res.data);
            Swal.fire({
              title: "Cancelado!",
              text: "Tu reserva ha sido cancelada.",
              icon: "success",
            });
          });
        }
        setDataFromBack(false);
        setCurrentStatus("cancelled");
      })

      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "No se pudo cancelar la reserva. Intenta nuevamente.",
          icon: "error",
        });
      });
  };

  return (
    <div className={styles.cajaTurno}>
      <h2>Id: {id}</h2>
      <h2>Fecha: {date}</h2>
      <h2>Horario: {time}</h2>
      <h2>Estado: {currentStatus}</h2>
      {currentStatus === "active" && (
        <button onClick={handleOnClick} className={styles.cancelButton}>
          ❌
        </button>
      )}
    </div>
  );
};

export default Turno;
