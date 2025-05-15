import { Router } from "express";
import {
  getAppoints,
  getAppointById,
  postAppointSchedule,
  putAppointCancel,
} from "../controllers/appointControlers";

const appointRouter: Router = Router();

appointRouter.get("/", getAppoints); //all
appointRouter.get("/:id", getAppointById); //id
appointRouter.post("/schedule", postAppointSchedule); //nuevo turno
appointRouter.put("/cancel", putAppointCancel); //cambiar estatus del turno

export default appointRouter;
