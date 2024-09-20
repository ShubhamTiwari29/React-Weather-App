import React from 'react';

const WeatherDetails = ({ weatherData }) => {
    if (!weatherData) return null;

    const {
        temperature,
        weather,
        feelsLike,
        cityCountry,
        cityName,
        cityHumidity,
        cityPressure,
        citySpeed,
        cityVisibility,
        icon,

    } = weatherData;

    return (
        <div className="weather-details bg-gray-900 p-8 rounded-lg shadow-lg text-white  mx-auto my-8">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold">
                    {cityName}, {cityCountry}
                </h1>
                <p className="text-xl text-gray-400">{weather}</p>
            </div>

            <div className="flex flex-col items-center">
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                    alt="Weather Icon"
                    className="w-44 h-44 mb-6"
                />
                <p className="text-5xl font-bold">
                    {Math.round(temperature - 273)}°C
                </p>
                <p className="text-lg text-gray-400 mb-4">
                    Feels like {Math.round(feelsLike - 273)}°C
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="text-lg font-semibold">Humidity</p>
                    <p className="text-2xl font-bold">{cityHumidity}%</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="text-lg font-semibold">Pressure</p>
                    <p className="text-2xl font-bold">{cityPressure} mb</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="text-lg font-semibold">Visibility</p>
                    <p className="text-2xl font-bold">
                        {cityVisibility / 1000} km
                    </p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                    <p className="text-lg font-semibold">Wind Speed</p>
                    <p className="text-2xl font-bold">{citySpeed} m/s</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;
