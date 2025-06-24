import mysql from "mysql2/promise";
const mydb = await mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"820939",
  database:"mydb",
});
console.log("Connected Successfully");
 const [rows] = await mydb.execute("SELECT * FROM roll_his;");
  console.log(rows);

