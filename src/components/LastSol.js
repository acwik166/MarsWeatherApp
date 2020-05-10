import React, { useContext } from 'react';

import { WeatherContext } from '../context/WeatherContext';
import { MetricContext } from '../context/MetricContext';

const LastSol = () => {
    const { weatherData } = useContext(WeatherContext);
    const { metric, convertMetric } = useContext(MetricContext);
    if (!weatherData) {
        return null
    }
    const last_sol = weatherData[weatherData.length - 1]

    return (
        <div className="mb-3">
            <div>
                <h1 className="font-weight-bold">Sol {last_sol.sol}</h1>
                <p className="font-weight-light"><kbd className="bg-danger">{last_sol.date_string}</kbd></p>
            </div>
            <div className="mt-2">
                <p>High: {!metric ? `${last_sol.max_temperature}° C` : convertMetric(last_sol.max_temperature) + '° F'}</p>
                <p>Low: {!metric ? `${last_sol.min_temperature}° C` : convertMetric(last_sol.min_temperature) + '° F'}</p>
                <p>Avg: {!metric ? `${last_sol.avg_temperature}° C` : convertMetric(last_sol.avg_temperature) + '° F'}</p>
            </div>
        </div>
    )
}

export default LastSol;
