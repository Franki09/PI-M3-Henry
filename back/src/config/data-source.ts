import { DataSource, Repository } from "typeorm";
import { EntUser } from "../entities/EntUser";
import { EntCredential } from "../entities/EntCredential";
import { config } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  synchronize: true,
  logging: ["error"],
  entities: ["src/entities/**/*.ts"],
  dropSchema: false,
});

export const UserModel: Repository<EntUser> = AppDataSource.getRepository(EntUser);
export const CredentialModel: Repository<EntCredential> = AppDataSource.getRepository(EntCredential);
