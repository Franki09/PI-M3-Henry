import { AppointmentRegisterDTO } from "../DTOs/appointmentDTO";
import { EntAppointment } from "../entities/EntAppointment";
import { Status } from "../interfaces/IAppointment";
import { AppointmentRepository } from "../repositories/Appointment.Reppository";
import { getUserByIdService } from "./userServices";

export const getAppointmentService = async (): Promise<EntAppointment[]> => {
  const appointments: EntAppointment[] = await AppointmentRepository.find();
  if (appointments.length === 0) throw Error("No hay citas registradas");
  return appointments;
};

export const getAppointmentByIdService = async (id: number): Promise<EntAppointment> => {
  const appointmentFound = await AppointmentRepository.findOneBy({ id });
  if (!appointmentFound) throw Error(`La cita con Id: ${id}, no fue encontrada`);
  return appointmentFound;
};

export const registerAppointmentService = async (appointment: AppointmentRegisterDTO): Promise<EntAppointment> => {
  await getUserByIdService(appointment.userId);

  AppointmentRepository.validateAllowAppointment(appointment.date, appointment.time);
  await AppointmentRepository.validateExistingAppointment(appointment.userId, appointment.date, appointment.time);

  const newAppointment = AppointmentRepository.create({
    date: appointment.date,
    time: appointment.time,
    user: {
      id: appointment.userId,
    },
  });

  return await AppointmentRepository.save(newAppointment);
};

export const cancelAppointmentService = async (id: number): Promise<void> => {
  const appointmentFound = await AppointmentRepository.findOneBy({ id });

  if (!appointmentFound) throw Error(`La cita con id ${id} no existe`);
  appointmentFound.status = Status.cancelled;
  await AppointmentRepository.save(appointmentFound);
};
