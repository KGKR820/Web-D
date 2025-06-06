const express = require("express");
const path = require("path");
const mysql = require("mysql2/promise");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
 
app.get("/api/users", async (req, res) => {
    try {
        const mydb = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "820939",
            database: "mydb",
        });
        console.log("Database connection established successfully");

        const [rows] = await mydb.execute("SELECT * FROM users");
        

        res.json(rows);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(8080, () => {
    console.log("Server Started on http://localhost:8080");
});