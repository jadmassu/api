

const express = require("express");
const app = express();
app.use(express.json({ limit: "500mb" }));


app.use("/user", require("./api/user/UserApi"))

app.get("/", (req, res) => {
    res.send("<h2>some mmessage</h2>");
});

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})