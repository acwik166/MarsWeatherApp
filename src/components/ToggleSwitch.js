import React, { useContext } from 'react';

import { MetricContext } from '../context/MetricContext';

import '../styles/ToggleSwitch.css';

const ToggleSwitch = () => {
    const { setMetric } = useContext(MetricContext);
    return (
        <div className="toggleSwitch text-white">
            <span className="metric">°C </span>
            <label className="switch">
                <input type="checkbox" onClick={() => setMetric((prev) => !prev)} />
                <span className="slider round"></span>
            </label>
            <span className="metric"> °F</span>
        </div>
    )
}

export default ToggleSwitch;
