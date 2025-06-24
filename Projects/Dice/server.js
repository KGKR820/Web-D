const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname,"Public")));
app.get('/',(req,res) => {
   res.sendFile(path.join(__dirname,'Public','index.html'));
})
app.listen(port,()=>{
    console.log("Server started on port 3000");
})