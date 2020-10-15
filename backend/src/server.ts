import express from 'express';
const app = express();

app.listen(5000);

app.get("/", (req, res) => {
    return res.json({ message: "Hello World" })
})