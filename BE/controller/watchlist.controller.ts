import type { Request, Response } from "express";
import { ILoginPayload, IRegisterPayload } from "../interface/auth";
import { AuthService } from "../services/auth.service";
import { SendSuccessResponse } from "../helpers/returnHelper";
import { WatchlistService } from "../services/watchlist.service";

export async function getAllWatchlist(req: Request, res: Response) {
	try {
		let payload: IRegisterPayload = {
			email: req?.body?.email,
			fullname: req?.body?.fullname,
			password: req?.body?.password,
		};

		let register = await WatchlistService.getWatchlist(payload);
		SendSuccessResponse(res, register);
	} catch (error: any) {
		console.error("Error registering new user account.", error);
		throw new Error("Error register account");
	}
}

export async function addWatchlist(req: Request, res: Response) {
	try {
		let payload: ILoginPayload = {
			email: req?.body?.email,
			password: req?.body?.password,
		};

		let login = await WatchlistService.createWatchlist(payload);
		SendSuccessResponse(res, login);
	} catch (error: any) {
		console.error("Login Failed", error);
		throw new Error("Login Failed");
	}
}

export async function updateWatchlist(req: Request, res: Response) {
	try {
		let payload: ILoginPayload = {
			email: req?.body?.email,
			password: req?.body?.password,
		};

		let login = await WatchlistService.updateWatchlist(payload);
		SendSuccessResponse(res, login);
	} catch (error: any) {
		console.error("Login Failed", error);
		throw new Error("Login Failed");
	}
}
