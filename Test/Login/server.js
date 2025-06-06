const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "820939", 
  database: "mydb"
});


app.post("/register", (req, res) => {
  const { username, password } = req.body;
  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err) => {
    if (err) {
      console.error(err);
      return res.status(400).send("Registration failed (duplicate user?)");
    }
    res.send("User registered");
  });
});


app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, results) => {
    if (err) return res.status(500).send("Error");
    if (results.length === 0) return res.status(401).send("Invalid credentials");
    res.json({ message: "Login successful", user: results[0] });
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));