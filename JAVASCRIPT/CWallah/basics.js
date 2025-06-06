console.log("Hello World");
console.log("Hi Guys");
console.log("hi", "Hello");
console.log(3 + 4);
console.log("3+4");

c = 4.2;
console.log(c + 3);

c = "Vannakam";
console.log(c);

age = 70;
exp = 90;
console.log("Age -> " + age + " Guys");
console.log(`Age : ${age} and experience : ${exp}`);

const x = 4;
console.log(x);

var y = 6;
console.log(y);

let a = 7;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

age = 25;
if (age > 18) {
  console.log("Major");
} else {
  console.log("Minor");
}

a = 5;
b = "5";
console.log(a == b);
console.log(a === b);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(arr.length);
arr.push(7);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(9);
console.log(arr);
arr.shift();
console.log(arr);
arr = [1, "hi", 7.932, true, [6, 9, 8]];
console.log(arr);
console.log(typeof arr);

//forof loop
for (const ele of arr) {
  console.log(ele);
}
//foreach loop
arr.forEach((ele, i) => {
  console.log(ele, i);
});

a = "Hi Guys";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a);
a = "    Hi Guys  ";
console.log(a.trim() + "\n" + a);

a = "hi guys hello vanna kam";
arr = a.split(" ");
console.log(arr);

//object
a = {
  name: "annaga",
  age: 16,
  gender: "Personals",
  "nick name": "Avinash",
};
console.log(a);
console.log(a.age);

//forin loop
for (const key in a) {
  if (Object.hasOwnProperty.call(a, key)) {
    console.log(key + ":" + a[key]);
  }
}

//in-built math functions
console.log(Math.floor(2.785));
console.log(Math.floor(-2.785));
console.log(Math.sqrt(9));
console.log(Math.pow(3.34, 2));
console.log(Math.ceil(7.62));
console.log(Math.ceil(-7.62));
console.log(Math.max(7.62, 90, 543, 90.563, 4567.982));
console.log(Math.min(7.62, 90, 543, 90.563, 4567.982));
console.log(Math.random()); // 0-1
m = 40;
console.log(Math.random() * m); //0-m-1(inc)

// print 1-10 with 1 sec gap
for (let i = 1; i <= 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// here time starts after running thr code

function sqr(ele) {
  return ele * ele;
}
arr = [1, 2, 3, 4, 5];
console.log(arr);

brr = arr.map(sqr);
console.log(brr);

crr = arr.map(function (ele) {
  return ele ** 3;
});
console.log(crr);

drr = arr.map((ele) => ele ** 4);
console.log(drr);

//Filter
arr = [2, 3, 1, 5, 4, 8, 6, 90];
console.log(arr);
brr = arr.filter((ele) => {
  if (ele % 2 == 0) return ele;
});
console.log(brr);

//reduce
b = arr.reduce((a, b) => a + b);
console.log(b);

//sort
brr = arr.sort(); // not perfect sort
console.log(brr);
brr = arr.sort((a, b) => a - b);
console.log(brr);
brr = arr.sort((a, b) => b - a);
console.log(brr);

crr = 830;

crr = crr.toString();
crr = [...crr];
crr.forEach((ele, i) => {
  crr[i] = Number(ele);
});
console.log(crr);
