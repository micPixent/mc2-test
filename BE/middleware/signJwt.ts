import jwt from "jsonwebtoken";
import config from "../config/config";
import { ErrorCode } from "../interface/errorCodes";

const signJWT = (user: any): Promise<string> => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			{
				id: user._id,
				username: user.username,
				fullname: user.fullname,
			},
			config.server.token.secret,
			{
				issuer: config.server.token.issuer,
				algorithm: "HS256",
				expiresIn: config.server.token.expireTime,
			},
			(error, token) => {
				if (error) {
					reject(
						new ErrorCode({
							error: error.message,
							description: "Unknown Server Error",
						})
					);
				}

				if (token) {
					resolve(token);
				}
			}
		);
	});
};

export default signJWT;
