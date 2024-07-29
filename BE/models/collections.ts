import dbProperties from "../database/dbProperties";
import { BaseFunction } from "./base";

export class Users extends BaseFunction() {
	protected static collection: any = dbProperties.collection_user;
}

export class UsersWatchlist extends BaseFunction() {
	protected static collection: any = dbProperties.collection_user_watchlist;
}
