let x :number = 9
console.log(x)

let y= 920;
y.toFixed();
console.log(y);

let Name:string = "Kirby"
console.log(Name)
Name = Name.toUpperCase()
console.log(Name)

function status(Name:string,age:number,present:boolean):void{
    console.log(`Name:${Name}`);
    console.log(`Age:${age}`);
    console.log(`Present:${present}`);
}
status("Kirby",200,true);

function add(Num1:number,Num2:number):number{
    return Num1+Num2;
}
console.log(add(2,11));

// Like structure in c we are creating a data type
type user ={
    name:string;
    age:number;
    alive:boolean;
}
function print(data:user):void{
    console.log(`Name:${data.name}`);
    console.log(`Age:${data.age}`);
    console.log(`Alive:${data.alive}`);
}
print({name:"Kirby",age:200,alive:true});

type character = {
    readonly name:string; // its like constant we cannat change its datatype in character obj
    Cost?:number // ? means itss like optional you may give a value(only number) to cost or leave it blank
}

type cardnumber ={
    num:string;
}
type cardDate={
    date:string;
}
type Card = cardnumber & cardDate & {
    cvv:number;
}

const Powers:string[] = [];
Powers.push("Fire");
console.log(Powers);

let w : number|string = 9; // ⚠️Remember you cannot use stringonly[toLowerCase()...] or numonly[*,/...] fns on W
w = "nine"

const array:(number | string)[] = ["Hi Guys",90];
console.log(array);

let choose: 1|2|3; // choose can only be 1,2,3
choose =1;
choose =2;

let Tupil:[string,number,boolean];
Tupil = ["Tulip",80,true];
console.log("Tupil");
Tupil.push(9000); // push,.. [array opern] break the Tupils prop

class User{
    email:string;
    age:number;
    constructor(email:string,age:number){
         this.email=email;
         this.age=age; 
    }
}
const Ramu = new User("Ramu",35);
console.log("Ramu");
console.log(9);
export{}