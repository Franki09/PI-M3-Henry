import { AppDataSource } from "../config/data-source";
import { EntAppointment } from "../entities/EntAppointment";

import moment from "moment";

export const AppointmentRepository = AppDataSource.getRepository(EntAppointment).extend({
  validateAllowAppointment: function (date: Date, time: string): void {
    const [hours, minutes] = time.split(":").map(Number);
    const appointmentDate = moment(date).set({ hour: hours, minute: minutes, second: 0 });

    const now = moment();
    const threeHoursAgo = moment().subtract(3, "hours");

    // Validación 1: No permitir citas en el pasado (con margen de 3h)
    if (appointmentDate.isBefore(threeHoursAgo)) {
      throw new Error("No se pueden agendar citas para fechas pasadas");
    }

    // Validación 2: Al menos 24 horas de anticipación
    const diffInHours = appointmentDate.diff(now, "hours");
    if (diffInHours < 24) {
      throw new Error("Las citas deben agendarse con al menos 24 horas");
    }

    // Validación 3: No permitir fines de semana
    const dayOfWeek = appointmentDate.day(); // 0 (Dom) a 6 (Sáb)
    if (dayOfWeek === 0) {
      throw new Error("No se pueden agendar citas los domingos");
    }

    // Validación 4: Sólo entre 8am y 6pm
    const hour = appointmentDate.hour();
    if (hour < 12 || hour > 22) {
      throw new Error("Las citas deben agendarse entre las 8 am y las 6 pm");
    }
  },

  validateExistingAppointment: async function (userId: number, date: Date, time: string): Promise<void> {
    const appointmentFound = await this.findOne({
      where: {
        user: {
          id: userId,
        },
        time: time,
        date: date,
      },
    });
    if (appointmentFound) throw Error(`La cita con fecha: ${date} y hora ${time} ya existe para el usuario con id: ${userId}`);
  },
});
