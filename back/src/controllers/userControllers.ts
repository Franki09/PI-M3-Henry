import { Request, Response } from "express";
import { UserRegisterDTO, UserLoginDTO, UserDTO } from "../DTOs/userDTO";
import { getUserByIdService, getUserService, registerUserService } from "../services/userServices";
import { IUser } from "../interfaces/IUser";

//* getUsers
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: UserDTO[] = await getUserService();

    res.status(200).json({
      msg: "Este controlador RECIBIRA del service un listado de TODOS los USERS",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener el listado de Usuarios",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* getUsersById
export const getUserById = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const userFound: UserDTO | undefined = await getUserByIdService(parseInt(req.params.id, 10));

    res.status(200).json({
      msg: "Este controlador RECIBIRA del service UN solo USER segun su ID",
      data: userFound,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener el Usuario especificado",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* postRegister
export const postUserRegister = async (req: Request<unknown, unknown, UserRegisterDTO>, res: Response): Promise<void> => {
  try {
    const newUser: IUser = await registerUserService(req.body);

    res.status(200).json({
      msg: "Este controlador POSTEARA a la BD el REGISTRO recibido del service",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al subir el Registro",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* postLogin
export const postUserLogin = async (req: Request<unknown, unknown, UserLoginDTO>, res: Response): Promise<void> => {
  try {
    //await getUserService()

    res.status(200).json({
      msg: "Este controlador POSTEARA a la BD el LOGIN recibido del service",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al subir el Login",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};
