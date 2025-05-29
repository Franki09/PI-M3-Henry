import { validationUserAge } from "./validateUserAge";
import moment from "moment";

export const validateRegister = (input) => {
  const errors = {};

  if (!input.name.trim()) {
    errors.name = "El nombre es obligatorio";
  } else if (/\d/.test(input.name)) {
    errors.name = "El nombre no puede tener números";
  }

  if (!input.email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "El email no es válido";
  }

  if (!input.birthdate) {
    errors.birthdate = "La fecha de nacimiento es obligatoria";
  } else
    try {
      validationUserAge(input.name, input.birthdate);
    } catch (error) {
      errors.birthdate = error.message;
    }

  if (!input.nDni.trim()) {
    errors.nDni = "El número de DNI es obligatorio";
  } else if (!/^\d{7,9}$/.test(input.nDni)) {
    errors.nDni = "El DNI debe tener entre 7 y 9 dígitos";
  }

  if (!input.username.trim()) {
    errors.username = "El nombre de usuario es obligatorio";
  }

  if (!input.password.trim()) {
    errors.password = "La contraseña es obligatoria";
  } else if (input.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  return errors;
};

export const validateLogin = (input) => {
  const errors = {};

  if (!input.username.trim()) {
    errors.username = "El nombre de usuario es obligatorio";
  }

  if (!input.password.trim()) {
    errors.password = "La contraseña es obligatoria";
  } else if (input.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }
};

export const validateAppointment = (input) => {
  const errors = {};
  const { date, time } = input;

  if (!date) {
    errors.date = "Debes ingresar una fecha";
  }

  if (!time) {
    errors.time = "Debes ingresar una hora";
  }

  if (!/^\d{2}:\d{2}$/.test(time)) {
    errors.time = "Formato de hora inválido (usa HH:mm)";
  }

  if (date && time) {
    const [hours, minutes] = time.split(":").map(Number);
    const appointmentDate = moment(date).set({ hour: hours, minute: minutes, second: 0 });

    const now = moment();
    const threeHoursAgo = moment().subtract(3, "hours");

    if (appointmentDate.isBefore(threeHoursAgo)) {
      errors.date = "No se pueden agendar citas para fechas pasadas";
    }

    const diffInHours = appointmentDate.diff(now, "hours");
    if (diffInHours < 24) {
      errors.date = "Las citas deben agendarse con al menos 24 horas de anticipacion";
    }

    const dayOfWeek = appointmentDate.day();
    if (dayOfWeek === 0) {
      errors.date = "No se pueden agendar citas los domingos";
    }

    const hour = appointmentDate.hour();
    if (hour < 12 || hour > 22) {
      errors.time = "Las citas deben agendarse entre las 12:00 y las 23:00";
    }
  }

  return errors;
};
