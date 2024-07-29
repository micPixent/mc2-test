import dbConnections from "./dbConnections";
import { userSchema } from "../schemas/users";

let defaultDb = dbConnections.defaultDb;

let userModel = defaultDb.model("Users", userSchema, "Users");

let dbProperties: Record<string, unknown> = {
	collection_user: userModel,
};

export default dbProperties;
