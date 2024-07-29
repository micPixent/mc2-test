import express, { Request, Response } from "express";
import { MongoClient, Db, Collection } from "mongodb";
import dbConnections from "./database/dbConnections";
const mongoose = require("mongoose");

const url =
	"mongodb+srv://michaelwong:kakarot1234@michaeltest.1ctlnwm.mongodb.net/";
const dbName = "michael-test";

const app = express();
const port = 8080;
let server: any;

server = app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

server.on("close", () => {
	console.log(`Server closed on port: ${port}`);
});

process.on("SIGINT", () => {
	console.info("prepare to close connection.");
	server.close(async (err: any) => {
		if (err) {
			console.error(err);
		}

		await dbConnections.closeConnection().catch((error) => {
			console.error("Database stop connection failed", error);
		});
		console.info("closing connection in 10 secs.");
		setTimeout(() => {
			process.exit(0);
		}, 10000);
	});
});

// mongoose
// 	.connect(url)
// 	.then(() => {
// 		app.listen(port, () => {
// 			console.log("listening on port", port);
// 		});
// 	})
// 	.catch((error: Error) => {
// 		console.log(error);
// 	});

app.get("/", (req: any, res: any) => {
	res.send("Hello World!");
});

// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`);
// });
