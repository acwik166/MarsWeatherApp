import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import LineChart from './components/LineChart';

import { WeatherProvider } from './context/WeatherContext';
import { MetricProvider } from './context/MetricContext';

import './styles/App.css';

const App = () => {
  return (
    <WeatherProvider>
      <MetricProvider>
        <Navbar />
        <div className="container">
          <Card />
          <LineChart />
        </div>
      </MetricProvider>
    </WeatherProvider>
  )
}

export default App;
