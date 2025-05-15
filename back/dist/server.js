"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainRouter_1 = __importDefault(require("./routes/mainRouter"));
// import morgan from "morgan";
const server = (0, express_1.default)();
// server.use(morgan("dev"));
server.use(express_1.default.json());
server.use(mainRouter_1.default);
exports.default = server;
