import { ICredential } from "../interfaces/ICredential";
import bcrypt from "bcrypt";

const credentials: ICredential[] = [];

let id: number = 1;

export const checkUserExist = (username: string): void => {
  const usernameFound: ICredential | undefined = credentials.find((cred) => cred.username === username);
  if (usernameFound) throw Error(`El usuario con username ${username} ya existe, intente con otro nombre de usuario`);
};

export const checkUserCredentials = async (username: string, password: string) => {
  const usernameFound: ICredential | undefined = credentials.find((cred) => cred.username === username);

  if (!usernameFound) return undefined;
  const cryptPassword = await bcrypt.compare(password, usernameFound.password);
  return cryptPassword ? usernameFound.id : undefined;
};

export const getCredentialService = async (username: string, password: string): Promise<number> => {
  checkUserExist(username);

  const cryptPassword = await bcrypt.hash(password, 10);
  const credential = {
    id: id,
    username: username,
    password: cryptPassword,
  };

  credentials.push(credential);
  id++;
  return credential.id;
};
