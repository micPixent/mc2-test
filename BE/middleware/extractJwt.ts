import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Send400ErrorResponse } from "../helpers/returnHelper";
import config from "../config/config";

export const extractJWT = (req: Request, res: Response, next: NextFunction) => {
	let token = req.headers.authorization;
	if (token) {
		jwt.verify(
			token,
			config.server.token.secret,
			async (error, decoded: any) => {
				if (error) {
					Send400ErrorResponse(res, "101", "Invalid Token");
					return;
				}

				if (decoded?.iss !== config.server.token.issuer) {
					Send400ErrorResponse(res, "102", "Invalid Token");
					return;
				}

				res.locals.JWTToken = decoded;
				next();
			}
		);
	} else {
		next();
	}
};

const verifyJWT = (_req: Request, res: Response, next: NextFunction) => {
	if (!res.locals?.JWTToken) {
		Send400ErrorResponse(res, "100", "Invalid Token");
		return;
	}
	next();
};
export default verifyJWT;
