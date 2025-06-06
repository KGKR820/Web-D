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
  password: "820939", 
  database: "mydb"
});

app.post("/books", (req, res) => {
  const { title, author, genre } = req.body;
  db.query("INSERT INTO books (title, author, genre) VALUES (?, ?, ?)", [title, author, genre], (err) => {
    if (err) return res.status(500).send("Error adding book");
    res.send("Book added");
  });
});


app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) return res.status(500).send("Error fetching books");
    res.json(results);
  });
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  db.query("DELETE FROM books WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send("Error deleting book");
    res.send("Book deleted");
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));