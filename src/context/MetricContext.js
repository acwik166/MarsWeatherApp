import React, { createContext, useState } from 'react';

export const MetricContext = createContext();

export const MetricProvider = ({ children }) => {
    const [metric, setMetric] = useState(false);

    // Convert Celcius to Fahrenheit
    const convertMetric = (num) => {
        return (num * 1.8 + 32).toFixed(1);
    }

    return (
        <MetricContext.Provider value={{ metric, setMetric, convertMetric }}>
            {children}
        </MetricContext.Provider>
    )
}

