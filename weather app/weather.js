const getWeatherData = async (city) => {
  const apiKey = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
  const response = await fetch(url)
  const data = await response.json()
  const weatherData = {
    'city': data.name,
    'country': data.sys.country,
    'icon': data.weather[0].icon,
    'main': data.weather[0].main,
    'description': data.weather[0].description,
    'temperature': data.main.temp,
    'feelsLike': data.main.feels_like,
    'humidity': data.main.humidity,
    'windSpeed': data.wind.speed
  };
  console.log(data)
  console.log(weatherData)
  return weatherData
}

function displayWeatherData(weatherData) {
  const weatherDataDiv = document.getElementById("weatherData");
  weatherDataDiv.innerHTML = `
    <h2>${weatherData.city}, ${weatherData.country}</h2>
    <img src=https://openweathermap.org/img/wn/${weatherData.icon}@2x.png>
    <p><strong>Description:</strong> ${weatherData.description}</p>
    <p><strong>Temperature:</strong> ${tempConverter(weatherData.temperature)}°F</p>
    <p><strong>Feels Like:</strong> ${tempConverter(weatherData.feelsLike)}°F</p>
    <p><strong>Humidity:</strong> ${weatherData.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${weatherData.windSpeed}m/s</p>
  `;
  switch(weatherData['main']){
    case 'Clear':
      document.body.style.backgroundImage = 'url(weather_gifs/clear.gif)';
      break;
    case 'Clouds':
      document.body.style.backgroundImage = 'url(weather_gifs/cloudy.gif)';
      break;
    case 'Rain':
      document.body.style.backgroundImage = 'url(weather_gifs/rain.gif)'
      break;
    case 'Snow':
      document.body.style.backgroundImage = 'url(weather_gifs/snow.gif)'
      break;
    case 'Thunderstorm':
      document.body.style.backgroundImage = 'url(weather_gifs/storm.gif)'
      break;
  }
};

const tempConverter = (K) => Math.floor(((K-273.15)*1.8)+32)

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", async() => {
  const searchInput = document.getElementById("searchInput");
  const city = searchInput.value;
  const weatherData = await getWeatherData(city)
  displayWeatherData(weatherData);
});
