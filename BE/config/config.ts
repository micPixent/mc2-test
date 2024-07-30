import "dotenv/config";

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_TOKEN_SECRET =
	process.env.SERVER_TOKEN_SECRET || "THISIS_TESTING_TOKEN";
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRED || "1d";
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || "test_ISSUER";

const SERVER = {
	environment: process.env.APP_ENV,
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT,
	token: {
		expireTime: SERVER_TOKEN_EXPIRETIME,
		secret: SERVER_TOKEN_SECRET,
		issuer: SERVER_TOKEN_ISSUER,
	},
};

const config = {
	server: SERVER,
	auth: {
		SALT_LENGTH: 10,
		MAX_REGISTER_FULLNAME: 10,
	},
};

export default config;
