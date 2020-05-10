import React, { useContext } from 'react';
import SolItem from './SolItem';

import { WeatherContext } from '../context/WeatherContext';

const SolList = () => {
    const { weatherData } = useContext(WeatherContext);
    if (!weatherData) {
        return null
    }
    const lastElement = weatherData[weatherData.length - 1]
    return (
        <div className="card-group">
            {weatherData.slice(lastElement, weatherData.length - 1).map((sol, index) => <SolItem key={index} sol={sol}/>)}
        </div>
    )
}

export default SolList;
