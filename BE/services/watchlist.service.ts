import { ILoginPayload, IRegisterPayload } from "../interface/auth";
import { Users } from "../models/collections";

export class WatchlistService {
	static async createWatchlist(payload: any) {
		let user = {
			email: payload.email,
			fullname: payload.fullname,
			password: payload.password,
		};

		await Users.save(user);
		return payload;
	}

	static async getWatchlist(payload: any) {
		let user = {
			email: payload.email,
			password: payload.password,
		};

		return {};
	}

	static async updateWatchlist(payload: any) {
		let user = {
			email: payload.email,
			password: payload.password,
		};

		return {};
	}
}
