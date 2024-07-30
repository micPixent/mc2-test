import express, { Request, Response } from "express";
import { MongoClient, Db, Collection } from "mongodb";
import dbConnections from "./database/dbConnections";
import bodyParser from "body-parser";
import { authRoutes } from "./routes/auth.routes";
import cors from "cors";
import { extractJWT } from "./middleware/extractJwt";

const mongoose = require("mongoose");

const url =
	"mongodb+srv://michaelwong:kakarot1234@michaeltest.1ctlnwm.mongodb.net/";
const dbName = "michael-test";

const app = express();
const port = 8080;
const urlPath = "/mc2-test/";
let server: any;

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(extractJWT);

app.use(
	cors({
		origin: "http://localhost:3000", // Allow requests from your frontend's origin
		methods: "GET,POST,PUT,DELETE,OPTIONS",
		allowedHeaders: "Content-Type, Authorization",
	})
);

app.use((_req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization, nonce"
	);
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Cache-Control", "public, max-age=31557600");
	next();
});

app.use(urlPath, authRoutes);

server = app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

server.on("close", () => {
	console.log(`Server closed on port: ${port}`);
});

app.get("/", (req: any, res: any) => {
	res.send("Hello World!");
});
