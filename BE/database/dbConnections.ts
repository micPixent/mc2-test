import "dotenv/config";
import mongoose, { type Connection } from "mongoose";
import { ConnectOptions } from "../interface/connection";

let defaultDbUrl = process.env.DEFAULT_DB_URL ?? "";

interface DbConnections {
	defaultDb: Connection;
	closeConnection: () => Promise<void>;
}

function createConnection(
	uri: string,
	options?: ConnectOptions | any
): Connection {
	let defaultOptions: ConnectOptions = {
		retryWrites: true,
		socketTimeoutMS: 60000,
		connectTimeoutMS: 45000,
		readConcern: { level: "local" },
	};

	let customOptions = { ...defaultOptions, ...options };

	mongoose.set("maxTimeMS", 1800000);
	const connection: Connection = mongoose.createConnection(uri, customOptions);

	connection.once("open", () => {
		console.log(`Mongoose connected to ${uri}`);
	});

	return connection;
}

function disconnect() {
	return mongoose.connection.close(false);
}

const defaultDb = createConnection(defaultDbUrl, {
	replicaSet: process.env.DEFAULT_DB_NAME,
});

const dbConnections: DbConnections = {
	defaultDb: defaultDb,
	closeConnection: disconnect,
};

export default dbConnections;
