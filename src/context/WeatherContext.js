import React, { createContext, useEffect, useState } from 'react';

// Create context
export const WeatherContext = createContext();

// Provider component
export const WeatherProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        const api_key = 'MSgrn9zphEsxdWju3ZHNtGonz26r2LaIzZWlEmIa';
        const url = `https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const sol_list = data.sol_keys.map((sol_key) => {
                const date = new Date(data[sol_key].First_UTC)
                const month = date.toLocaleString('default', { month: 'long'});
                const day = date.getUTCDate();
                return { 
                    sol: sol_key,
                    max_temperature: +data[sol_key].AT?.mx.toFixed(1) || 'No data',
                    min_temperature: +data[sol_key].AT?.mn.toFixed(1) || 'No data',
                    avg_temperature: Math.round(data[sol_key].AT?.av * 10) / 10 || 'No data',
                    max_pressure: Math.round(data[sol_key].PRE?.mx * 10) / 10 || 'No data',
                    min_pressure: Math.round(data[sol_key].PRE?.mn * 10) / 10 || 'No data',
                    avg_pressure: Math.round(data[sol_key].PRE?.av * 10) / 10 || 'No data',
                    wind_speed: Math.round(data[sol_key].HWS?.av * 10) / 10 || 0,
                    wind_direction: data[sol_key].WD?.most_common.compass_point || 0,
                    wind_degrees: data[sol_key].WD?.most_common.compass_degrees || 0,
                    season: data[sol_key].Season,
                    date_UTC: data[sol_key].First_UTC,
                    date_string: `${month} ${day}`
                }
            });

            setWeatherData(sol_list);
            setLoading(false);
        })
    }, []);

    return (
        <WeatherContext.Provider value={{weatherData, loading}}>
            {children}
        </WeatherContext.Provider>
    )
}

