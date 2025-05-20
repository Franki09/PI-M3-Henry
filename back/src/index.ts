import server from "./server";
import { config } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { preloadData } from "./helpers/preloadData_test";

AppDataSource.initialize().then(() => {
  console.log("Conexion a la DB realizada con exito");

  preloadData();

  server.listen(config.PORT, () => {
    console.log(`El servidor se escucha en el PORT ${config.PORT}`);
  });
});
