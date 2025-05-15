import { Router } from "express";
import userRouter from "./userRoutes";
import appointRouter from "./appointRoutes";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointRouter);

export default router;
