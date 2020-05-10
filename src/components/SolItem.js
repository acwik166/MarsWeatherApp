import React, { useContext } from 'react';

import { MetricContext } from '../context/MetricContext';

const SolItem = ({ sol }) => {
    const { metric, convertMetric } = useContext(MetricContext);
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">
                <p className="font-weight-bold">Sol {sol.sol}</p>
                <small className="text-secondary"><kbd className="bg-danger">{sol.date_string}</kbd></small>
            </div>
            <div className="card-body">
                <p className="card-text text-nowrap">High {!metric ? `${sol.max_temperature}° C` : convertMetric(sol.max_temperature) + '° F'}</p>
                <p className="card-text text-nowrap">Low: {!metric ? `${sol.min_temperature}° C` : convertMetric(sol.min_temperature) + '° F'}</p>
                <p className="card-text text-nowrap">Avg: {!metric ? `${sol.avg_temperature}° C` : convertMetric(sol.avg_temperature) + '° F'}</p>
            </div>
        </div>
    )
}

export default SolItem;
