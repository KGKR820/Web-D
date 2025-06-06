const clockElement = document.getElementById("clock");
const toggleButton = document.getElementById("toggleFormat");
let is24HourFormat = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (!is24HourFormat) {
    hours = hours % 12 || 12; 
  }

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

toggleButton.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  toggleButton.textContent = is24HourFormat
    ? "Switch to 12-hour format"
    : "Switch to 24-hour format";
});

setInterval(updateClock, 1000);
updateClock();