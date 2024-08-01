import type { Request, Response } from "express";
import { ILoginPayload } from "../interface/auth";
import {
	Send400ErrorResponse,
	SendSuccessResponse,
} from "../helpers/returnHelper";
import { WatchlistService } from "../services/watchlist.service";

export async function getAllWatchlist(req: Request, res: Response) {
	try {
		const { id } = req.query;

		if (!id) {
			return Send400ErrorResponse;
		}

		let fetchWatchlist = await WatchlistService.getWatchlist(id as string);
		SendSuccessResponse(res, fetchWatchlist);
	} catch (error: any) {
		console.error("Error fetch watchlist.", error);
		throw new Error("Error fetch watchlis");
	}
}

export async function updateWatchlist(req: Request, res: Response) {
	try {
		const { id } = req.query;

		if (!id) {
			return Send400ErrorResponse;
		}

		const watchlist: Array<string> = req.body.watchlist;

		let mutateWatchlist = await WatchlistService.updateWatchlist(
			id as string,
			watchlist
		);

		SendSuccessResponse(res, mutateWatchlist);
	} catch (error: any) {
		console.error("Update watchlist failed", error);
		throw new Error("Update watchlist failed");
	}
}
