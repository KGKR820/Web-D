import mysql from "mysql2/promise";
const mydb = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "820939",
  database: "mydb",
});
console.log("Started Succesfully");
// console.log(await mydb.execute("show databases"));

// await mydb.execute(`
//   create table users(
//    id int primary key auto_increment,
//    username varchar(50) not null,
//    email varchar(50) not null unique
//   );
//   `);

// await mydb.execute(`
//   insert into users(username,email)
//   values 
//         ("KGKR","kgkr6018@gmail.com"),
//         ("AAA","AAA8889@gmail.com")
  
//   `);

// const rows = await mydb.execute(`
//               select * from users
//               `)
//   console.log(rows);

// const [rows] = await mydb.execute(`
//   select * from employees
//   `)
// console.log(rows);