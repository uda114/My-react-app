import express from "express";
import token from "jsonwebtoken";
import pg from "pg";
import core from "cors";

const app = express();
const port = 3000;

app.use(core());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ Message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
