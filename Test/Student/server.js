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


app.post("/students", (req, res) => {
  const { name, age, course } = req.body;
  db.query("INSERT INTO students (name, age, course) VALUES (?, ?, ?)", [name, age, course], (err) => {
    if (err) return res.status(500).send("Error adding student");
    res.send("Student added");
  });
});


app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).send("Error fetching students");
    res.json(results);
  });
});

// Delete student
app.delete("/students/:id", (req, res) => {
  db.query("DELETE FROM students WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send("Error deleting student");
    res.send("Student deleted");
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));