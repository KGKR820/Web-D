// document.getElementById("heading").textContent = "Heading";
// let username = window.prompt("Username: ");
// document.getElementById("Username").textContent = `${username}`;


// document.getElementById("submit").onclick = ()=>{
//   let name = document.getElementById("Name").value;
//     document.getElementById("heading").textContent = `Hello ${name}` ;
// }


// let age = window.prompt("Age: ");
// console.log(age,typeof age);
// age = Number(age);
// console.log(age,typeof age);
// age = String(age);
// console.log(age,typeof age);
// age = Boolean(age);
// console.log(age,typeof age);

let box = document.getElementById("box");
document.getElementById("submit").onclick = ()=>{
    if(box.checked){
        document.getElementById("heading").textContent = `You Liked`;
    }
    else{
        document.getElementById("heading").textContent = `You not Liked`;
    }
}