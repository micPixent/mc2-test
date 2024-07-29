import { IRegisterPayload } from "../interface/auth";
import { Users } from "../models/collections";

export class AuthService {
	static async register(payload: IRegisterPayload) {
		let user = {
			email: payload.email,
			fullname: payload.fullname,
		};

		await Users.save(user);
		return payload;
	}
}
