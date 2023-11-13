


import express, { Application, Request, Response } from 'express';
import { connectToDatabase } from './src/utils/sequelize';
// import 'dotenv/config';
// require("dotenv").config({ path: "./config.env" });
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

// import config from './config';


const app: Application = express();


app.use(express.json({ limit: "500mb" }));




app.use("/user", require("./src/user/User.api"))

// app.get("/", (req, res) => {
//     res.send("<h2>some mmessage</h2>");
// });
app.get("/", (req: Request, res: Response) => {
    res.send("<h2>some mmessage</h2>");

});

// connectToDatabase()

const port = process.env.PORT || 3000
console.log("", process.env["PORT"])
console.log(`listening on porttt ${[process.env.PORT]}`)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})