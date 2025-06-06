function clk(){
   const date = new Date();
   const hrs = String(date.getHours()).padStart(2,`0`);
   const min = String(date.getMinutes()).padStart(2,`0`);
   const sec = String(date.getSeconds()).padStart(2,`0`);
   const time = `${hrs}:${min}:${sec}`;
   document.getElementById("clock").textContent = time;
}
setInterval(clk,1000);