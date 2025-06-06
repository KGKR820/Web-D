//callback
hi(bye); // only called hi function
function hi(callback){
    console.log("hi");
    callback();
}
function bye(){
    console.log("bye");
}

class Pokemon {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }
  displayPokemon() {
    console.log(`Name: ${this.name}`);
    console.log(`Hp: ${this.hp}`);
    console.log(`Attack: ${this.attack}`);
    console.log(`Type: ${this.type}`);
  }
  who() {
    console.log(`Who's that pokemon: it's ${this.name}`);
  }
}

let pikachu = new Pokemon("pikachu", 90, 72);
pikachu.displayPokemon();
pikachu.who();

class PokemonType extends Pokemon {
  constructor(name, hp, attack, type) {
    super(name, hp, attack);
    this.type = type;
  }
}

let pichu = new PokemonType("pichu", 20, 32, "electric");
pichu.displayPokemon();

let arr = ["koko", "delibird", "raichu", "pikachu"];
let [a, b, ...c] = arr;
console.log(`a => ${a}, b => ${b}, c => ${c}`);

let legend = {
  name: "mew",
  type: "psychic",
  color: "pink",
};
let { name, type, color, region = "kanto" } = legend;
console.log(`Name => ${name}, Region : ${region}`);

let brr = [`hi`,`bye`,`fcuk`];
brr = brr.sort((a,b) => a.localeCompare(b));
console.log(brr);

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()
console.log(date);
console.log(year);
console.log(month);

function points(){
    let score =0;
    function increase(value){
       score = score+value;
    }
    function decrease(value){
        score = score-value;
     }
     function getscore(){
        return score;
     }
     return {increase,decrease,getscore};
}
let match = points();
match.increase(9);
match.decrease(2);
console.log(`Final match Score => ${match.getscore()}`);