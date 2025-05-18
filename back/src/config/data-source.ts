import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "DBpostgresSQL",
  database: "proyecto_m3",
  synchronize: true,
  logging: false,
  entities: [User, Appointment, Credential],
  subscribers: [],
  migrations: [],
  //   dropSchema: true,
});

export const UserModel = AppDataSource.getRepository(User);
export const AppointmentModel = AppDataSource.getRepository(Appointment);
export const CredentialModel = AppDataSource.getRepository(Credential);
