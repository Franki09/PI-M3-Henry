import { AppDataSource, UserModel } from "../config/data-source";

const user1 = {
  name: "Juan Pérez",
  email: "juan.perez@example.com",
  birthdate: new Date("1990-04-15"),
  nDni: 12345678,
};

const user2 = {
  name: "María García",
  email: "maria.garcia@example.com",
  birthdate: new Date("1985-09-22"),
  nDni: 87654321,
};

const user3 = {
  name: "Carlos López",
  email: "carlos.lopez@example.com",
  birthdate: new Date("1993-12-03"),
  nDni: 11223344,
};

export const preloadData = async () => {
  await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    const users = await UserModel.find();

    if (users.length) return console.log("No se hizo la precarga de datos porque ya hay datos");

    const newUser1 = await UserModel.create(user1);
    const newUser2 = await UserModel.create(user2);
    const newUser3 = await UserModel.create(user3);

    await transactionalEntityManager.save(newUser1);
    await transactionalEntityManager.save(newUser2);
    await transactionalEntityManager.save(newUser3);

    console.log("Precarga de datos realizada con éxito");
  });
};
