"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import 'dotenv/config';
// require("dotenv").config({ path: "./config.env" });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './config.env' });
// import config from './config';
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "500mb" }));
app.use("/user", require("./src/user/User.api"));
// app.get("/", (req, res) => {
//     res.send("<h2>some mmessage</h2>");
// });
app.get("/", (req, res) => {
    res.send("<h2>some mmessage</h2>");
});
// connectToDatabase()
const port = process.env.PORT || 3000;
console.log("", process.env["PORT"]);
console.log(`listening on porttt ${[process.env.PORT]}`);
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
