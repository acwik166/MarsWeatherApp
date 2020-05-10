import React from 'react';

import ToggleSwitch from './ToggleSwitch';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-danger mb-5">
            <span className="navbar-brand mb-0 h1 mx-auto">MarsWeather</span>
            <div className="navbar-text">
                <ToggleSwitch />
            </div>
        </nav>
    )
}

export default Navbar;
