const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req,res) =>{
    const log = `${new Date()} ${req.url} New Request!\n`;
    const myurl = url.parse(req.url,true);
    if(myurl.pathname === "/favicon.ico") return res.end("");
    fs.appendFile("./log.txt",log,(err,data) => {
       switch(myurl.pathname){
        case "/":
            res.end("You are on homepage");
            break;
        case "/about":
            res.end("Myself K.G.K.R");
            break;
        case "/search":
            const search = myurl.query.search;
            res.end("You searched for " +search);
            break;
        default: res.end("404 Not Found");
       }
    });
});
server.listen(8000,() => {
    console.log("Server Started!");
});