import { Request, Response, Router } from "express";
import { getAppoints, getAppointById, postAppointSchedule, putAppointCancel } from "../controllers/appointControlers";
import { AppointRegisterDTO } from "../DTOs/appointmentDTO";

const appointRouter: Router = Router();

appointRouter.get("/", (req: Request, res: Response) => getAppoints(req, res)); //all

appointRouter.get("/:id", (req: Request<{ id: string }>, res: Response) => getAppointById(req, res)); //id

appointRouter.post("/schedule", (req: Request<unknown, unknown, AppointRegisterDTO>, res: Response) => postAppointSchedule(req, res)); //nuevo turno

appointRouter.put("/cancel/:id", (req: Request<{ id: string }>, res: Response) => putAppointCancel(req, res)); //cambiar estatus del turno

export default appointRouter;
