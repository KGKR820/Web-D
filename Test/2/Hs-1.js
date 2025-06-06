async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "fd67d80a2817ba16be5522ac3a79111d"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error("City not found or API error");
      }

      const data = await response.json();
      console.log(data);
      const weatherResult = document.getElementById("weatherResult");
      weatherResult.innerHTML = `
          <p><strong>City:</strong> ${data.name}</p>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      `;
  } catch (error) {
      const weatherResult = document.getElementById("weatherResult");
      weatherResult.innerHTML = `<p style="color: red;"><strong>Error:</strong> ${error.message}</p>`;
  }
}