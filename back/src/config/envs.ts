import "dotenv/config";
import { IConfig } from "../interfaces/IConfig";

export const config: IConfig = {
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  // el "?" verifica que exista y si existe lo transforma en un number (ya que de normal es texto)
  // y si no existe por default va a escuchar por puerto 3000

  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
};
