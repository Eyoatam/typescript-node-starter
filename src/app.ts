import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { Application, Request, Response, NextFunction } from "express";
const app: Application = express();

const port = 3000;

// external middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ message: "request accepted" });
	next();
});

app.listen(port, "127.0.0.1", () => {
	console.log(`listening to requests on port ${port}`);
});
