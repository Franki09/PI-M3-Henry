import server from "./server";
import { PORT } from "./config/envs";

server.listen(PORT, () => {
  console.log(`El servidor se escucha en el PORT ${PORT}`);
});
