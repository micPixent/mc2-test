import { ILoginPayload, IRegisterPayload } from "../interface/auth";
import { ErrorCode, ErrorCodes } from "../interface/errorCodes";
import signJWT from "../middleware/signJwt";
import { Users } from "../models/collections";

export class AuthService {
	static async register(payload: IRegisterPayload) {
		let user = {
			email: payload.email,
			fullname: payload.fullname,
			password: payload.password,
		};

		let findUserExist = await Users.findOne({ email: user?.email });

		if (findUserExist) {
			throw new ErrorCode(ErrorCodes.EmailExist);
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

	static async isValidPassword(password: string, dbPassword: string) {
		// return await compare(password, dbPassword);
		return password === dbPassword;
	}
}
