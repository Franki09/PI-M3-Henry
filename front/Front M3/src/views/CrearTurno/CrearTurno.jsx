import { useFormik } from "formik";
import { validateAppointment } from "../../helpers/validate";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./CrearTurno.module.css";

const CrearTurno = () => {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
    },

    validate: validateAppointment,

    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id;

      const data = {
        ...values,
        userId: userId,
      };

      console.log(data);
      axios
        .post("http://localhost:3000/appointments/schedule", data)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire({
              icon: "success",
              title: "Reserva agendada",
              text: "Puedes ver tus reservas en Mis Reservas",
            });

            //   navigate("/home");
          }
        })
        .catch((err) => {
          console.log(err);

          if (err.status === 400) {
            Swal.fire({
              icon: "error",
              title: "No se pudo agendar",
              text: "Ya existe una reserva en ese dia y hora ",
            });
          }
        });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Llamamos a validate manualmente con los valores actuales
    const errores = validateAppointment(formik.values);

    if (Object.keys(errores).length > 0) {
      Swal.fire({
        title: "Algo anda mal",
        text: "Debes llenar todos los campos correctamente",
        icon: "warning",
      });
      return; // No seguimos con submit
    }

    // Si no hay errores, ejecutamos el onSubmit de Formik
    formik.handleSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.cajaForm}>
        <h2>Hacer una Reserva</h2>
        <div className={styles.cajaInput}>
          <label>Dia de la Reserva</label>
          <input type="date" name="date" value={formik.values.date} onChange={formik.handleChange} />
          {formik.errors.date && <p style={{ color: "red" }}>{formik.errors.date} </p>}
        </div>

        <div className={styles.cajaInput}>
          <label>Hora de la Reserva</label>
          <input type="text" name="time" value={formik.values.time} onChange={formik.handleChange} />
          {formik.errors.time && <p style={{ color: "red" }}>{formik.errors.time} </p>}
        </div>
        <button type="submit" className={styles.buttonInput}>
          Crear Reserva
        </button>
      </form>
    </>
  );
};

export default CrearTurno;
