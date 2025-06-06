const fs = require("fs");
// fs.writeFileSync("./text.txt","Hello Guys");
// fs.writeFileSync("./text.txt","Hello Guys How Are You?");

// Sync returns value - Blocking request
let result = fs.readFileSync("./doc.txt","utf-8");
console.log(result);

//Async expects callback - Non - Blocking Request
fs.readFile("./doc.txt","utf-8",(err,result) => { 
    if(err){
        console.log(Error);
    }
    else{
        console.log(result);
    }
})

// fs.appendFileSync("./doc.txt","\n Nakk Nak Nak Nakodhu");
// // Sync returns value
// let result = fs.readFileSync("./doc.txt","utf-8");
// console.log(result);