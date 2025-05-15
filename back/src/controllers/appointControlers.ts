import { Request, Response } from "express";

//* getAppoints
export const getAppoints = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //await getUserService()

    res.status(200).json({
      msg: "Este controlador RECIBIRA del service un listado de todos los APPOINTMENTS",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener el listado de Appointments",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* getAppointsById
export const getAppointById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //await getUserService()

    res.status(200).json({
      msg: "Este controlador RECIBIRA del service un UN APPOINTMENT segun su ID",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener el Appointment especificado",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* postSchedule
export const postAppointSchedule = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //await getUserService()

    res.status(200).json({
      msg: "Este controlador POSTEARA a la DB el SCHEDULE del APPOINTMENT",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al subir el schedule",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* putCancel
export const putAppointCancel = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //await getUserService()

    res.status(200).json({
      msg: "Este controlador ACTUALIZARA el ESTADO del APPOINTMENT",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al actulizar el Appointment",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};
