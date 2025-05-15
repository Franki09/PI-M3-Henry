import { Router } from "express";
import {
  getUsers,
  getUserById,
  postUserRegister,
  postUserLogin,
} from "../controllers/userControllers";

const userRouter: Router = Router();

userRouter.get("/", getUsers); //all
userRouter.get("/:id", getUserById); //id
userRouter.post("/register", postUserRegister); //registro
userRouter.post("/login", postUserLogin); //login

export default userRouter;
