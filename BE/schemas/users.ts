import { Schema } from "mongoose";

export const userSchema = new Schema({
	id: { type: String, required: true },
	email: { type: String, required: true },
	fullname: { type: String, required: false },
	password: { type: String, required: true },
});

export const userWatchlistSchema = new Schema({
	id: { type: String, required: true },
	email: { type: String, required: true },
	fullname: { type: String, required: true },
	watchlist: [String],
});
