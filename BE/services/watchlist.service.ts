import { ErrorCode, ErrorCodes } from "../interface/errorCodes";
import { Users, UsersWatchlist } from "../models/collections";

export class WatchlistService {
	static async getWatchlist(id: string) {
		let user = await UsersWatchlist.findOne({ id: id });

		if (!user) {
			throw new ErrorCode(ErrorCodes.InvalidUser);
		}

		if (!user.watchList) {
			return { watchlist: [] };
		}

		return { watchlist: user.watchlist };
	}

	static async updateWatchlist(id: string, watchlist: Array<string>) {
		let user = await UsersWatchlist.findOne({ id: id });

		if (!user) {
			throw new ErrorCode(ErrorCodes.InvalidUser);
		}

		const result = await UsersWatchlist.updateOne(
			{ id: user.id },
			{ $set: { watchlist: watchlist } }
		);

		if (!result) {
			throw new Error("Failed to update watchlist.");
		}

		user = await UsersWatchlist.findOne({ id: id });

		return { watchlist: user.watchlist };
	}
}
