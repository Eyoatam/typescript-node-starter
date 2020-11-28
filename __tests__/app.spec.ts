import express from "express";
import bodyParser from "body-parser";
import { jest } from "@jest/globals";

jest.useFakeTimers();

// etc.

test("starts the app", () => {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use((req, res, next) => {
		console.log("request acepted");
		res.status(200).json({ messgae: "request accepted" });
		next();
	});
});
