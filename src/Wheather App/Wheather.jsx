import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Wheather = () => {

    const [city, setCity] = useState("mumbai")
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async (cityName) => {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=88f802ae781b3805ad3918687cc50a26&units=metric`;
        try {
            if (!city) {
                alert("please type something!!!")
                return
            }

            const { data } = await axios.get(weatherUrl)
            setWeatherData(data)
            
        } catch (error) {
            console.log(error);
            alert("Sorry, an error occurred while fetching the weather data.");
        }
    }

    useEffect(() => {
        // Fetch weather data for Mumbai by default on page load
        fetchWeatherData("Mumbai");
    }, []);

    const handleSearch = () => {
        if (!city) {
            alert("Please type something!!!");
            return;
        }
        fetchWeatherData(city);
    }

  return (
    <div className='flex justify-center h-screen items-center'>
        <div className='sm:w-[500px] w-full bg-[#eee] p-3 shadow-md rounded-md'>
            <h2 className='text-xl text-center mb-2'>Wheather App</h2>
            <div className='flex items-center gap-2 mb-2'>
                <input type="text" className='w-full p-1 rounded-md' placeholder='Search the city here.....' onChange={e => setCity(e.target.value)} />
                <button onClick={handleSearch} className='py-1 px-3 rounded-md hover:bg-blue-500 bg-blue-600 text-white'>Search</button>
            </div>
            {weatherData && (
                <div className="text-center bg-white p-4 rounded-md shadow">
                <h3 className="text-2xl font-bold mb-2">{weatherData.name}, {weatherData.sys.country}</h3>
                <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                    alt="Weather Icon"
                    className="mx-auto"
                />
                <p className="text-xl font-medium">Temperature: {weatherData.main.temp}°C</p>
                <p>Feels Like: {weatherData.main.feels_like}°C</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Pressure: {weatherData.main.pressure} hPa</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                <p>Visibility: {weatherData.visibility / 1000} km</p>
                <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default Wheather