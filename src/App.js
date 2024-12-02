import React, { useState } from 'react'
import Search from './components/search/Search'
import CurrentWeather from './components/current-weather/CurrentWeather'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'
import Forecaste from './components/forecast/Forecaste'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForcast] = useState(null);
  const handleOnSearchChange = (searchData)=>{
    const [lat, long] = searchData.value.split(" ");
    const CurrentFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);
    const ForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([CurrentFetch, ForecastFetch])
      .then(async (response) =>{
        const weatherRes = await response[0].json();
        const forecastRes = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForcast({ city: searchData.label, ...forecastRes});
      })
      .catch((err) =>{
        console.log(err);
      })
  }
  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecaste data={forecast} />}
    </div>
  )
}

export default App
