
import express, { Application, Request, Response } from 'express';
import { connectToDatabase } from './src/utils/sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });




const app: Application = express();


app.use(express.json({ limit: "50mb" }));

app.use("/user", require("./src/user/User.api"))


app.get("/", (req: Request, res: Response) => {
    res.send("<h2>some message</h2>");

});

connectToDatabase()

const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})