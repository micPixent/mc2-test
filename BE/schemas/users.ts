import { Schema } from "mongoose";

export const userSchema = new Schema({
	email: { type: String, required: true },
	fullname: { type: String, required: true },
});
