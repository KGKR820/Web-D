const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MANI@143", 
  database: "inventory_db"
});


app.post("/items", (req, res) => {
  const { name, quantity, status } = req.body;
  db.query("INSERT INTO items (name, quantity, status) VALUES (?, ?, ?)", [name, quantity, status], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Item added");
  });
});


app.get("/items", (req, res) => {
  db.query("SELECT * FROM items", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});


app.delete("/items/:id", (req, res) => {
  db.query("DELETE FROM items WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Item deleted");
  });
});
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });