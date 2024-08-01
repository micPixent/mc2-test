import express from "express";
import {
	getAllWatchlist,
	updateWatchlist,
} from "../controller/watchlist.controller";

export const watchlistRoutes = express.Router();
watchlistRoutes.use(express.json());

watchlistRoutes.get("/getWatchlist", getAllWatchlist);
watchlistRoutes.put("/updateWatchlist", updateWatchlist);
