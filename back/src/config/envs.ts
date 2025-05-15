import "dotenv/config";

export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
// el "?" verifica que exista y si existe lo transforma en un number (ya que de normal es texto)
// y si no existe por default va a escuchar por puerto 3000
