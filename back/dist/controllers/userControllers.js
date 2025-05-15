"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserLogin = exports.postUserRegister = exports.getUserById = exports.getUsers = void 0;
const getUsers = () => {
    console.log("Este controlador RECIBIRA del service un listado de TODOS los USERS");
};
exports.getUsers = getUsers;
const getUserById = () => {
    console.log("Este controlador RECIBIRA del service UN solo USER segun su ID");
};
exports.getUserById = getUserById;
const postUserRegister = () => {
    console.log("Este controlador POSTEARA a la BD el REGISTRO recibido del service");
};
exports.postUserRegister = postUserRegister;
const postUserLogin = () => {
    console.log("Este controlador POSTEARA a la BD el LOGIN recibido del service");
};
exports.postUserLogin = postUserLogin;
