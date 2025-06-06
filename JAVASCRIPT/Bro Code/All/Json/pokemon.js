const pokemon = [{
    "name" : "pikachu",
    "type" : "Electric",
    "region" : "Kanto"
},
{
   "name" : "Gengar",
    "type" : "Dark",
    "region" : "Kanto" 
},
{
    "name" : "Greninja",
     "type" : "Water",
     "region" : "Kalos" 
 }
];
const JsonString = JSON.stringify(pokemon);
console.log(JsonString);
const parsedData = JSON.parse(JsonString);
console.log(parsedData);

async function poke(){
    try{
        const response = await fetch('./pokemon.json');
    if(!response.ok){
        throw new Error("Error!");
    }
    const data = await response.json();
    data.forEach(ele=> {
        console.log(ele.name);
    });
    }
    catch(error){
        console.error("Error");
    }
}
poke();