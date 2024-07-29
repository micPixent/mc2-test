import { Schema } from "mongoose";

export const userSchema = new Schema({
	username: { type: String, required: true },
	fullname: { type: String, required: true },
});
