import express from "express";
import { register } from "../controller/auth.controller";

export const authRoutes = express.Router();
authRoutes.use(express.json());

authRoutes.post("/register", register);
authRoutes.post("/login", register);
