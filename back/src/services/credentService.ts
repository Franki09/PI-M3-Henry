import bcrypt from "bcrypt";
import { CredentialModel } from "../config/data-source";
import { EntCredential } from "../entities/EntCredential";
import { EntityManager } from "typeorm";

export const checkUserExist = async (username: string): Promise<void> => {
  const usernameFound: EntCredential | null = await CredentialModel.findOneBy({ username });
  if (usernameFound) throw Error(`El usuario con username ${username} ya existe, intente con otro nombre de usuario`);
};

export const checkUserCredentials = async (username: string, password: string): Promise<EntCredential> => {
  const credentialFound: EntCredential | null = await CredentialModel.findOneBy({ username });

  if (!credentialFound) throw Error("Credenciales incorrectas");

  const passwordMatch = await bcrypt.compare(password, credentialFound.password);

  if (passwordMatch) return credentialFound;
  else throw Error("Credenciales incorrectas");
};

export const getCredentialService = async (entityManager: EntityManager, username: string, password: string): Promise<EntCredential> => {
  await checkUserExist(username);
  const cryptPassword = await bcrypt.hash(password, 10);

  const newCredential = entityManager.create(EntCredential, {
    username,
    password: cryptPassword,
  });

  return await entityManager.save(newCredential);
};
