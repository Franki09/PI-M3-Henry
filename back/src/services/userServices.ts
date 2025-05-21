import { UserDTO, UserLoginDTO, UserRegisterDTO } from "../DTOs/userDTO";
import { checkUserCredentials, getCredentialService } from "./credentService";
import { AppDataSource, UserModel } from "../config/data-source";
import { EntUser } from "../entities/EntUser";
import { validationUserAge } from "../helpers y utils/validationUserAge";
import { EntCredential } from "../entities/EntCredential";

export const getUserService = async (): Promise<UserDTO[]> => {
  const nuevoArray: EntUser[] = await UserModel.find();
  return nuevoArray;
};

export const getUserByIdService = async (id: number): Promise<UserDTO | undefined> => {
  const userFound: EntUser | null = await UserModel.findOne({
    where: {
      id: id,
    },
    relations: ["appointments"],
  });
  if (!userFound) throw Error(`El usuario con Id: ${id}, no fue encontrado`);
  return userFound;
};

export const registerUserService = async (user: UserRegisterDTO): Promise<EntUser> => {
  validationUserAge(user.name, user.birthdate);

  const resultTransaction = await AppDataSource.transaction(async (entityManager) => {
    const credentialId: EntCredential = await getCredentialService(entityManager, user.username, user.password);
    const newUser = entityManager.create(EntUser, {
      name: user.name,
      email: user.email,
      nDni: user.nDni,
      birthdate: new Date(user.birthdate),
      credentials: credentialId,
    });
    await entityManager.save(newUser);
    return newUser;
  });
  return resultTransaction;
};

export const loginUserService = async (userCredentials: UserLoginDTO): Promise<EntUser | null> => {
  const credential: EntCredential = await checkUserCredentials(userCredentials.username, userCredentials.password);
  const userFound: EntUser | null = await UserModel.findOne({
    where: {
      credentials: {
        id: credential.id,
      },
    },
  });

  return userFound;
};
