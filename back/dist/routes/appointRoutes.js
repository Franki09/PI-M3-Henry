"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointControlers_1 = require("../controllers/appointControlers");
const appointRouter = (0, express_1.Router)();
appointRouter.get("/", appointControlers_1.getAppoints); //all
appointRouter.get("/:id", appointControlers_1.getAppointById); //id
appointRouter.post("/schedule", appointControlers_1.postAppointSchedule); //nuevo turno
appointRouter.put("/cancel", appointControlers_1.putAppointCancel); //cambiar estatus del turno
exports.default = appointRouter;
