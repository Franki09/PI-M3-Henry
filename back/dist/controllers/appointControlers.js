"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAppointCancel = exports.postAppointSchedule = exports.getAppointById = exports.getAppoints = void 0;
const getAppoints = () => {
    console.log("Este controlador RECIBIRA del service un listado de todos los APPOINTMENTS");
};
exports.getAppoints = getAppoints;
const getAppointById = () => {
    console.log("Este controlador RECIBIRA del service un UN APPOINTMENT segun su ID");
};
exports.getAppointById = getAppointById;
const postAppointSchedule = () => {
    console.log("Este controlador POSTEARA a la DB el SCHEDULE del APPOINTMENT");
};
exports.postAppointSchedule = postAppointSchedule;
const putAppointCancel = () => {
    console.log("Este controlador ACTUALIZARA el ESTADO del APPOINTMENT");
};
exports.putAppointCancel = putAppointCancel;
