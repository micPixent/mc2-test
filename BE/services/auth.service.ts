import { ILoginPayload, IRegisterPayload } from "../interface/auth";
import { ErrorCode, ErrorCodes } from "../interface/errorCodes";
import signJWT from "../middleware/signJwt";
import { Users, UsersWatchlist } from "../models/collections";

const { v4: uuidv4 } = require("uuid");
export class AuthService {
	static async register(payload: IRegisterPayload) {
		const random = uuidv4();
		console.log(random, "randpm userid");
		let user = {
			id: random,
			email: payload.email,
			fullname: payload.fullname,
			password: payload.password,
		};

		let userWatchlist = {
			id: random,
			email: payload.email,
			fullname: payload.fullname,
			watchlislt: [],
		};

		let findUserExist = await Users.findOne({ email: user?.email });

		if (findUserExist) {
			throw new ErrorCode(ErrorCodes.EmailExist);
		}
		await Users.save(user);
		await UsersWatchlist.save(userWatchlist);
		return { message: "Account created successfully" };
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

		return {
			id: user.id,
			fullname: user.fullname,
			email: user.email,
			token: token,
		};
	}

	static async isValidPassword(password: string, dbPassword: string) {
		return password === dbPassword;
	}
}
