import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import jwt from "jsonwebtoken";
import axios from "axios";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Product",
  password: "123456",
  port: 5432,
});

db.connect();

const prodcut = [];

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Home");
});

const authenticationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log("Access Denied. No token provided");
    return res.status(403).send("Access Denied. No token provided");
  }
  try {
    /* console.log(token);
    const decode = jwt.decode(token, { complete: true });
    console.log(decode); */
    jwt.verify(token, "secret_key", (err, user) => {
      if (err) {
        console.log("Token is not correct");
        res.status(403).send("Token is not correct");
      }
      next();
    });
  } catch (err) {
    console.log("Invalid Token");
    res.status(400).send("Invalid Token");
  }
};

app.get("/get/data", async (req, res) => {
  //console.log("Working");
  try {
    const result = await db.query("SELECT * FROM product");
    //console.log(result.rows);
    res.send(result.rows);
    console.log("Data sent successfully");
  } catch (error) {
    console.error("Error Retriving data:", error);
    res.status(500).json({ error: "An error occurred while Retriving data" });
  }
});

app.post("/save/data", async (req, res) => {
  //console.log("Working");
  const data = req.body;
  //console.log(req.body);
  prodcut.push(data);
  try {
    const result = await db.query(
      "INSERT INTO product (productId, productName, price, productDescription, quantity,image) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        data.productId,
        data.productName,
        data.price,
        data.productDescription,
        data.quantity,
        data.image,
      ]
    );

    //console.log(result);
    console.log("Data inserted successfully");
    res.status(200).json({ message: "Data received successfully" });
  } catch (error) {
    // add detailed error messages according to the error and send that to the user
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "An error occurred while inserting data" });
  }
  //console.log(prodcut);
  //res.send({ message: "Data received successfully", product: prodcut });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  console.log(username, password);

  try {
    let result = await db.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );
    if (result.rows.length > 0) {
      const token = jwt.sign({ username }, "secret_key", {
        expiresIn: "1h",
      }); // Generate JWT token
      console.log(token);
      res.send({ token: token });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error("Error querying users:", error);
    res.status(500).json({ error: "An error occurred while querying users" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
