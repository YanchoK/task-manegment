import React from 'react';
import './Navbar.css'

const Navbar: React.FC = () => {

    return (
        <div className="navbar">
        <div className="navbar-brand">Get it done!</div>
        <div className="navbar-left">
            <a href="#top" className="navbar-button">Home</a>
            <a href="#calendar" className="navbar-button">Calendar</a>
        </div>
        <div></div>
    </div>
    );
}

export default Navbar;