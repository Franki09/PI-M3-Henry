import { UserDTO, UserRegisterDTO } from "../DTOs/userDTO";
import { getCredentialService } from "./credentService";
import { UserModel } from "../config/data-source";

export const getUserService = async (): Promise<UserDTO[]> => {
  const nuevoArray = await UserModel.find();
  return nuevoArray;
};

export const getUserByIdService = async (id: number): Promise<UserDTO | undefined> => {
  const userFound = await UserModel.findOneBy({ id });
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
