import { IRegisterPayload } from "../interface/auth";

export class AuthService {
	static async register(payload: IRegisterPayload) {
		return payload;
	}
}
