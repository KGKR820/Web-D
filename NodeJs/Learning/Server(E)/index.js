const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "(5)form.html"));
});
app.get("/about",(req,res) => {
   return res.send("Your name is " + app.query.name + "and your age is " + app.query.age);
})

app.listen(8080, () => {
    console.log("Server Started");
});