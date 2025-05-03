let x = document.querySelector("h1");
x.style.color = "red";

let y = document.querySelector("h2");
y.style.backgroundColor = "pink";

setTimeout(() => {
  x.innerHTML = "Guysssss";
}, 1 * 1000);

let z = document.getElementById("e1");
z.addEventListener("click", () => {
  z.style.color = "yellow";
  z.style.backgroundColor = "red";
});
z.addEventListener("mouseleave", () => {
    z.style.color = "Black";
    z.style.backgroundColor = "White";
  });

let a = document.getElementById("e2");
a.addEventListener("mousemove", () => {
  a.style.color = "white";
  a.style.backgroundColor = "orange";
});
a.addEventListener("mouseleave", () => {
  a.style.color = "Black";
  a.style.backgroundColor = "White";
});

let b = document.getElementById("e3");
a.addEventListener("click", () => {
  b.style.color = "white";
  b.style.backgroundColor = "purple";
});

b.addEventListener("click", () => {
  z.innerHTML = "Bulbasaur";
  z.style.backgroundColor = "green";
  z.style.color = "white";
});
