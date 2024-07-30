import express from "express";
import { login, register } from "../controller/auth.controller";
import verifyJWT from "../middleware/extractJwt";

export const authRoutes = express.Router();
authRoutes.use(express.json());

authRoutes.post("/register", register);
authRoutes.post("/login", login);
