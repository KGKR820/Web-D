let y = "kgkr6018@gmail.com";
for (const ele of y) {
    if(ele == "@"){
        console.log(true);
    }
}

let a = 12348002340099087667;
console.log(Array.from(a.toString()).length == 10);

console.log(y.includes("@"));

console.log(y.startsWith("j"));

console.log(y.endsWith(".com"));

y = y.replaceAll("k","h");
console.log(y);

y = y.slice(0,y.indexOf("@"));
console.log(y);

let u = "jojo9372827";
console.log([...u]);