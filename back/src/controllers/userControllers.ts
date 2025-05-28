import { Request, Response } from "express";
import { UserRegisterDTO, UserLoginDTO, UserDTO } from "../DTOs/userDTO";
import { getUserByIdService, getUserService, loginUserService, registerUserService } from "../services/userServices";
import { EntUser } from "../entities/EntUser";
import { IPostgressError } from "../interfaces/IPostgressError";

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
    res.status(404).json({
      msg: "Error al obtener el Usuario especificado",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};

//* postRegister
export const postUserRegister = async (req: Request<unknown, unknown, UserRegisterDTO>, res: Response): Promise<void> => {
  try {
    const newUser: EntUser = await registerUserService(req.body);

    res.status(201).json({
      msg: "Este controlador POSTEARA a la BD el REGISTRO recibido del service",
      data: newUser,
    });
  } catch (error) {
    const err = error as IPostgressError;

    res.status(400).json({
      msg: "Error al subir el Registro",
      error: error instanceof Error ? (err.detail ? err.detail : err.message) : "Error desconocido",
    });
  }
};

//* postLogin
export const postUserLogin = async (req: Request<unknown, unknown, UserLoginDTO>, res: Response): Promise<void> => {
  try {
    const user: EntUser | null = await loginUserService(req.body);

    res.status(200).json({
      msg: "Este controlador POSTEARA a la BD el LOGIN recibido del service",
      loggin: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Error al subir el Login",
      error: error instanceof Error ? error.message : "Error Desconocido",
    });
  }
};
