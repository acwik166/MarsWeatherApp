import React, { useState, useContext } from 'react';
import LastSol from './LastSol';
import SolList from './SolList';

import { WeatherContext } from '../context/WeatherContext';

import '../styles/App.css';

const Card = () => {
    const { loading } = useContext(WeatherContext);

    return (
        <>
            {loading ? 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> : 
                <div className="card mb-3 text-white">
                    <div className="card-body text-dark">
                        <h5 className="card-title">Weather at Elysium Planitia</h5>
                        <LastSol/>
                        <SolList/>
                    </div>
                </div>
            }
        </>
    )
}

export default Card;
