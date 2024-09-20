import React from 'react';
import { FaSearch } from "react-icons/fa";

const WeatherForm = ({ onSubmit, onCityClick }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const city = event.target.elements.cityName.value;
        if (city) {
            onSubmit(city);
            event.target.elements.cityName.value = '';
        }
    };

    return (
        <div className="w-full p-4 bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto my-8">
            <form onSubmit={handleSubmit} className="flex items-center justify-between">
                <input
                    className="w-2/3 rounded-lg px-4 py-2 text-gray-900"
                    type="text"
                    name="cityName"
                    placeholder="Enter city name"
                />
                <button
                    type="submit"
                    className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center ml-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <FaSearch />
                </button>
            </form>

            <div className="mt-6 grid grid-cols-2 gap-4">
                {['Lucknow', 'Gujarat', 'Mumbai', 'Bengaluru'].map((city) => (
                    <button
                        key={city}
                        className="w-full h-16 bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-md hover:shadow-blue-400 rounded-lg text-white font-semibold flex items-center justify-center transition-transform duration-300 hover:scale-105"
                        onClick={() => onCityClick(city)}
                    >
                        {city}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WeatherForm;
