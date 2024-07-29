import { ILoginPayload, IRegisterPayload } from "../interface/auth";
import { ErrorCodes } from "../interface/errorCodes";
import signJWT from "../middleware/signJwt";
import { Users } from "../models/collections";
import { compare } from "bcrypt";

export class AuthService {
	static async register(payload: IRegisterPayload) {
		let user = {
			email: payload.email,
			fullname: payload.fullname,
			password: payload.password,
		};

		let findUserExist = await Users.findOne({ email: user.email });

		if (findUserExist.email) {
			return Promise.reject(ErrorCodes.InvalidUser);
		}
		await Users.save(user);
		return payload;
	}

	static async login(payload: ILoginPayload) {
		let user = await Users.findOne({ email: payload.email });

		if (!user.email && !user.fullname) {
			return Promise.reject(ErrorCodes.InvalidUser);
		}

		let isPasswordMatch = await this.isValidPassword(
			user.password,
			payload.password
		);

		if (!isPasswordMatch) {
			return Promise.reject(ErrorCodes.InvalidPassword);
		}

		let token = await signJWT(user);

		return { fullname: user.fullname, email: user.email, token: token };
	}

	static async isValidPassword(password: string, hashPassword: string) {
		return await compare(password, hashPassword);
	}
}
