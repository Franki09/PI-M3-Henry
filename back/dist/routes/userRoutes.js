"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const userRouter = (0, express_1.Router)();
userRouter.get("/", userControllers_1.getUsers); //all
userRouter.get("/:id", userControllers_1.getUserById); //id
userRouter.post("/register", userControllers_1.postUserRegister); //registro
userRouter.post("/login", userControllers_1.postUserLogin); //login
exports.default = userRouter;
