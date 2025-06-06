const display = document.getElementById("display");
function appenddisplay(input){
   display.value += input;
}
function calc(){
   try{
      display.value = eval(display.value);
   }
   catch(error){
      display.value = `Error`;
   }
}
function clearDisplay() {
   display.value = "";
}