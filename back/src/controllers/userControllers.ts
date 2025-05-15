import { Request, Response } from "express";

//* getUsers
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    //await getUserService()

    res.status(200).json({
      msg: "Este controlador RECIBIRA del service un listado de TODOS los USERS",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener el listado de Usuarios",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* getUsersById
export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //await getUserService()

    res.status(200).json({
      msg: "Este controlador RECIBIRA del service UN solo USER segun su ID",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener el Usuario especificado",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* postRegister
export const postUserRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //await getUserService()

    res.status(200).json({
      msg: "Este controlador POSTEARA a la BD el REGISTRO recibido del service",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al subir el Registro",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* postLogin
export const postUserLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //await getUserService()

    res.status(200).json({
      msg: "Este controlador POSTEARA a la BD el LOGIN recibido del service",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al subir el Login",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};
