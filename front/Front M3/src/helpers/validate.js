import { validationUserAge } from "./validateUserAge";

export const validate = (input) => {
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
