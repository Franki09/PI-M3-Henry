export const getAppoints = () => {
  console.log(
    "Este controlador RECIBIRA del service un listado de todos los APPOINTMENTS"
  );
};

export const getAppointById = () => {
  console.log(
    "Este controlador RECIBIRA del service un UN APPOINTMENT segun su ID"
  );
};

export const postAppointSchedule = () => {
  console.log("Este controlador POSTEARA a la DB el SCHEDULE del APPOINTMENT");
};

export const putAppointCancel = () => {
  console.log("Este controlador ACTUALIZARA el ESTADO del APPOINTMENT");
};
