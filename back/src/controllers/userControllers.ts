export const getUsers = () => {
  console.log(
    "Este controlador RECIBIRA del service un listado de TODOS los USERS"
  );
};

export const getUserById = () => {
  console.log("Este controlador RECIBIRA del service UN solo USER segun su ID");
};

export const postUserRegister = () => {
  console.log(
    "Este controlador POSTEARA a la BD el REGISTRO recibido del service"
  );
};

export const postUserLogin = () => {
  console.log(
    "Este controlador POSTEARA a la BD el LOGIN recibido del service"
  );
};
