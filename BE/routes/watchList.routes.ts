import express from "express";
import { register } from "../controller/auth.controller";

export const authRoutes = express.Router();
authRoutes.use(express.json());

authRoutes.get("/getWatchlist/:email", register);
authRoutes.post("/createWatchlist/:email", register);
authRoutes.put("/createWatchlist/:email", register);
