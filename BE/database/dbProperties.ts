import dbConnections from "./dbConnections";
import { userSchema, userWatchlistSchema } from "../schemas/users";

let defaultDb = dbConnections.defaultDb;

let userModel = defaultDb.model("Users", userSchema, "Users");
let userWatchlistModel = defaultDb.model(
	"UsersWatchlist",
	userWatchlistSchema,
	"UsersWatchlist"
);

let dbProperties: Record<string, unknown> = {
	collection_user: userModel,
	collection_user_watchlist: userWatchlistModel,
};

export default dbProperties;
