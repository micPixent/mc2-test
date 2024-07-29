import { ILoginPayload, IRegisterPayload } from "../interface/auth";
import { Users } from "../models/collections";

export class AuthService {
	static async register(payload: IRegisterPayload) {
		let user = {
			email: payload.email,
			fullname: payload.fullname,
			password: payload.password,
		};

		await Users.save(user);
		return payload;
	}

	static async login(payload: ILoginPayload) {
		let user = {
			email: payload.email,
			password: payload.password,
		};

		return {};
	}
}
