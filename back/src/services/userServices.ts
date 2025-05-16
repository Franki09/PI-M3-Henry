import { UserDTO, UserRegisterDTO } from "../DTOs/userDTO";
import { IUser } from "../interfaces/IUser";
import { getCredentialService } from "./credentService";

const users: IUser[] = [];

let identificador: number = 1;

export const getUserService = async (): Promise<UserDTO[]> => {
  const nuevoArray = users.map((user) => {
    const objetoUser = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    return objetoUser;
  });
  return nuevoArray;
};

export const getUserByIdService = async (id: number): Promise<UserDTO | undefined> => {
  const userFound = users.find((user) => user.id === id);
  if (!userFound) throw Error(`El usuario con Id: ${id}, no fue encontrado`);
  return userFound;
};

export const registerUserService = async (user: UserRegisterDTO) => {
  const credentialId: number = await getCredentialService(user.username, user.password);

  const newUser: IUser = {
    id: identificador++,
    name: user.name,
    email: user.email,
    nDni: user.nDni,
    birthdate: new Date(user.birthdate),
    credentialsId: credentialId,
  };
  users.push(newUser);
  return newUser;
};
