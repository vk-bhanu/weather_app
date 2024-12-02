import React from 'react'
import "./CurrentWeather.css" 

const CurrentWeather = ({data}) => {
  return (
    <div className='weather'>
        <div className='top'>
            <div>
            <p className='city'>{data.city}</p>
            <p className='description'>{data.weather[0].description}</p>
            </div>

            <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`}/>
        </div>

        <div className='bottom'>
            <p className='temp'>{Math.round(data.main.temp)}°C</p>
            <div className='details'>
                <div className='parameters'>
                    <span className='parameter-label'>Details</span>
                </div>

                <div className='parameters'>
                    <span className='parameter-label'>Feels like</span>
                    <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                </div>

                <div className='parameters'>
                    <span className='parameter-label'>Wind</span>
                    <span className='parameter-value'>{data.wind.speed} m/s</span>
                </div>

                <div className='parameters'>
                    <span className='parameter-label'>Humidity</span>
                    <span className='parameter-value'>{data.main.humidity}%</span>
                </div>

                <div className='parameters'>
                    <span className='parameter-label'>Pressure</span>
                    <span className='parameter-value'>{data.main.pressure} hPa</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CurrentWeather