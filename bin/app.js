"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
var port = 3000;
// external middlewares
app.use(morgan_1.default("dev"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get("/", function (req, res, next) {
    res.status(200).json({ message: "request accepted" });
    next();
});
app.listen(port, "127.0.0.1", function () {
    console.log("listening to requests on port " + port);
});
