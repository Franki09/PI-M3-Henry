export const validationUserAge = (username: string, date: Date): void => {
  const today = new Date().getFullYear();
  const userBirth = new Date(date).getFullYear();
  const age = today - userBirth;

  if (userBirth > today) throw Error(`El usuario ${username} tiene una fecha de nacimiento inválida`);
  if (age < 18) throw Error(`El usuario ${username} no puede ser menor de edad`);
};
