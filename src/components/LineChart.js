import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

import { WeatherContext } from '../context/WeatherContext';
import { MetricContext } from '../context/MetricContext';

const LineChart = () => {
    const { weatherData, loading } = useContext(WeatherContext);
    const { metric, convertMetric } = useContext(MetricContext);

    const [tempChartData, setTempChartData] = useState({});
    const [pressureChartData, setPressureChartData] = useState({});
    const [windSpeedChartData, setWindSpeedChartData] = useState({});

    const chart = () => {
        if (!weatherData) {
            return null
        }
        const dateLabels = [];
        weatherData.forEach((item) => {
            dateLabels.push(moment(item.date_UTC).format('MMMM D'))
        })
        
        const avgTemperature = [];
        const avgPressure = [];
        const windSpeed = [];
        weatherData.map((item) => {
            avgTemperature.push(item.avg_temperature)
            avgPressure.push(item.avg_pressure)
            windSpeed.push(item.wind_speed)
        })
        
        setTempChartData({
            labels: dateLabels,
            datasets: [
                {
                    label: !metric ? 'Average temperature (° C)' : 'Average temperature (° F)',
                    data: !metric ? avgTemperature : avgTemperature.map((item) => convertMetric(item)),
                    backgroundColor: [
                        'rgba(29, 79, 126, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
        
        setPressureChartData({
            labels: dateLabels,
            datasets: [
                {
                    label: 'Pressure (Pa)',
                    data: avgPressure,
                    backgroundColor: [
                        'rgba(220, 20, 21, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
        
        setWindSpeedChartData({
            labels: dateLabels,
            datasets: [
                {
                    label: 'Wind speed (m/s)',
                    data: windSpeed,
                    backgroundColor: [
                        'rgba(184, 39, 201, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
        
    }
    useEffect(() => {
        chart()
    }, [weatherData, metric])
    
    return (
        <>
            {loading ? 
                <div className="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div> :
                <div className="card mb-3">
                    <div className="row p-2">
                        <div className="col col-lg-6">
                            <Line data={tempChartData} options={{
                                responsive: true,
                            }}/>
                        </div>
                        <div className="col col-lg-6">
                            <Line data={pressureChartData} options={{
                                responsive: true
                            }}/>
                        </div>
                        <div className="col">
                            <Line data={windSpeedChartData} options={{
                                responsive: true
                            }}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default LineChart;
