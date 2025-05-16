import { Request, Response, Router } from "express";
import { getUsers, getUserById, postUserRegister, postUserLogin } from "../controllers/userControllers";
import { UserRegisterDTO, UserLoginDTO } from "../DTOs/userDTO";

const userRouter: Router = Router();

userRouter.get("/", (req: Request, res: Response) => getUsers(req, res)); //all

userRouter.get("/:id", (req: Request<{ id: string }>, res: Response) => getUserById(req, res)); //id

userRouter.post("/register", (req: Request<unknown, unknown, UserRegisterDTO>, res: Response) => postUserRegister(req, res)); //registro

userRouter.post("/login", (req: Request<unknown, unknown, UserLoginDTO>, res: Response) => postUserLogin(req, res)); //login

export default userRouter;
