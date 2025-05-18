import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then(() => {
  console.log("Conexion a la DB realizada con exito");

  server.listen(PORT, () => {
    console.log(`El servidor se escucha en el PORT ${PORT}`);
  });
});
