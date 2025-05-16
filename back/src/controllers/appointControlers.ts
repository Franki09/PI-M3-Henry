import { Request, Response } from "express";
import { AppointmentRegisterDTO } from "../DTOs/appointmentDTO";
import { IAppointment } from "../interfaces/IAppointment";
import {
  cancelAppointmentService,
  getAppointmentByIdService,
  getAppointmentService,
  registerAppointmentService,
} from "../services/appointService";

//* getAppoints
export const getAppoints = async (req: Request, res: Response): Promise<void> => {
  try {
    const appointments: IAppointment[] = await getAppointmentService();

    res.status(200).json({
      msg: "Este controlador RECIBIRA del service un listado de todos los APPOINTMENTS",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener el listado de Appointments",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* getAppointsById
export const getAppointById = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const appointmentFound: IAppointment = await getAppointmentByIdService(parseInt(req.params.id, 10));

    res.status(200).json({
      msg: "Este controlador RECIBIRA del service un UN APPOINTMENT segun su ID",
      data: appointmentFound,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener el Appointment especificado",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* postSchedule (REGISTRO)
export const postAppointSchedule = async (
  req: Request<unknown, unknown, AppointmentRegisterDTO>,
  res: Response
): Promise<void> => {
  try {
    const appointmentCreate: IAppointment = await registerAppointmentService(req.body);

    res.status(200).json({
      msg: "Este controlador POSTEARA a la DB el SCHEDULE del APPOINTMENT",
      data: appointmentCreate,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al subir el schedule",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* putCancel
export const putAppointCancel = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    await cancelAppointmentService(parseInt(req.params.id, 10));

    res.status(200).json({
      msg: "Cita cancelada con exito",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al actulizar el Appointment",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};
