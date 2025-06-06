alert("Think of a Number");
let a = prompt("Now enter here","default value");
alert("Type of the value : "+typeof(a));
alert("Now if you use Number.parseint() : string -> Number");
a = Number.parseInt(a);
alert("Now type of the value : "+typeof(a));
let write = confirm("Do you want that number on the page");
if(write){
    document.write(a);
}
else{
    document.write("Are you GAY");
}

