async function fetchdata(){
    try{
        const name = document.getElementById("srch").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if(!response.ok){
        throw new error(`Pokemon Not Found`);
      }
      const data = await response.json();
      console.log(data);
      const image = document.getElementById("image");
      image.src = data.sprites.front_default;
      image.style.display = "block";
    }
    catch(error){
       console.error(`Error`);
    }
}