


import express, { Application, Request, Response } from 'express';

const app: Application = express();


app.use(express.json({ limit: "500mb" }));




app.use("/user", require("./src/user/User.api"))

// app.get("/", (req, res) => {
//     res.send("<h2>some mmessage</h2>");
// });
app.get("/", (req: Request, res: Response) => {
    res.send("<h2>some mmessage</h2>");

});



const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})