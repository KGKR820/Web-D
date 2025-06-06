const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); 

const db = mysql.createConnection({
  host: "localhost",         
  user: "root",
  password: "820939",               
  database: "mydb"
});

db.query(`CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255) NOT NULL
)`);


app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});


app.post("/tasks", (req, res) => {
  const { description } = req.body;
  db.query("INSERT INTO tasks (description) VALUES (?)", [description], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

app.delete("/tasks/:id", (req, res) => {
  db.query("DELETE FROM tasks WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});