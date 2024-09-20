import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async (city) => {
    const apiKey = 'fec579312566e07af528a3ad339ac40b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        setError('Invalid city name. Please try again.');
        setWeatherData(null);
        throw new Error('Weather data not available');
      }

      const data = await response.json();
      console.log(data);


      setWeatherData({
        temperature: data.main.temp,
        weather: data.weather[0].description,
        feelsLike: data.main.feels_like,
        cityCountry: data.sys.country,
        cityName: data.name,
        cityHumidity: data.main.humidity,
        cityPressure: data.main.pressure,
        citySpeed: data.wind.speed,
        cityVisibility: data.visibility,
        icon: data.weather[0].icon,


      });


    } catch (error) {
      console.error('Fetch Error:', error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="App bg-[#1C1E29] min-h-screen flex flex-col items-center justify-center text-white">
      {/* Header */}
      <header className="py-6 text-4xl font-bold text-white">
        Weather App
      </header>

      {/* Weather Form */}
      <WeatherForm
        onSubmit={getWeather}
        onCityClick={(city) => getWeather(city)}
      />

      {/* Loading, Error, or Weather Details */}
      {loading ? (
        <div className="mt-8 text-xl">Loading weather data...</div>
      ) : error ? (
        <div className="mt-8 text-red-500">{error}</div>
      ) : (
        <WeatherDetails weatherData={weatherData} />

      )}


      <footer className="mt-auto py-4 text-sm text-gray-400">
        Powered by OpenWeather API
      </footer>
    </div>
  );
}

export default App;
