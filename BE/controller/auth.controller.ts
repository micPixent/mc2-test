import type { Request, Response } from "express";
import { ILoginPayload, IRegisterPayload } from "../interface/auth";
import { AuthService } from "../services/auth.service";
import {
	SendSuccessResponse,
	SendUnknownErrorResponse,
} from "../helpers/returnHelper";

export async function register(req: Request, res: Response) {
	try {
		let payload: IRegisterPayload = {
			email: req?.body?.email,
			fullname: req?.body?.fullname,
			password: req?.body?.password,
		};

		let register = await AuthService.register(payload);
		SendSuccessResponse(res, register);
	} catch (error: any) {
		console.error("Error registering new user account.", error);
		SendUnknownErrorResponse(res, error);
	}
}

export async function login(req: Request, res: Response) {
	try {
		let payload: ILoginPayload = {
			email: req?.body?.email,
			password: req?.body?.password,
		};

		if (!payload.email && !payload.password) {
			return;
		}

		let login = await AuthService.login(payload);
		SendSuccessResponse(res, login);
	} catch (error: any) {
		console.error("Login Failed", error);
		SendUnknownErrorResponse(res, error);
	}
}
