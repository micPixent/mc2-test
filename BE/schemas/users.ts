import { Schema } from "mongoose";

export const userSchema = new Schema({
	email: { type: String, required: true },
	fullname: { type: String, required: false },
	password: { type: String, required: true },
});

export const userWatchlistSchema = new Schema({
	email: { type: String, required: true },
	fullname: { type: String, required: true },
	watchlist: { type: Map, of: String, required: true },
});
