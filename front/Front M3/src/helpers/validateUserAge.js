export const validationUserAge = (username, date) => {
  const today = new Date().getFullYear();
  const userBirth = new Date(date).getFullYear();
  const age = today - userBirth;

  if (userBirth > today) throw Error(`No puede tener una fecha de nacimiento del futuro`);
  if (age < 18) throw Error(`El usuario no puede ser menor de edad`);
};
