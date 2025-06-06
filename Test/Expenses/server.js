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


app.post("/expenses", (req, res) => {
  const { description, amount, category } = req.body;
  db.query("INSERT INTO expenses (description, amount, category) VALUES (?, ?, ?)", [description, amount, category], (err) => {
    if (err) return res.status(500).send("Error adding expense");
    res.send("Expense added");
  });
});


app.get("/expenses", (req, res) => {
  db.query("SELECT * FROM expenses", (err, results) => {
    if (err) return res.status(500).send("Error fetching expenses");
    res.json(results);
  });
});


app.delete("/expenses/:id", (req, res) => {
  db.query("DELETE FROM expenses WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send("Error deleting expense");
    res.send("Expense deleted");
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));