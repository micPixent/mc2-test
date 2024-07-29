import type { Request, Response } from "express";
import { IRegisterPayload } from "../interface/auth";
import { AuthService } from "../services/authService";
import { SendSuccessResponse } from "../helpers/returnHelper";

export async function register(req: Request, res: Response) {
	try {
		let payload: IRegisterPayload = {
			email: req?.body?.email,
			fullname: req?.body?.fullname,
		};
		let register = await AuthService.register(payload);
		SendSuccessResponse(res, register);
	} catch (error: any) {
		console.error("Error registering new user account.", error);
		throw new Error("Error register account");
	}
}
