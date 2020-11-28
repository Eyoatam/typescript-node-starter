test("starts the app", () => {
	const express = require("express");
	const cors = require("cors");
	const bodyParser = require("body-parser");
	const app = express();

	app.use(cors());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use((req, res, next) => {
		console.log("request acepted");
		res.status(200).json({ messgae: "request accepted" });
	});
});
