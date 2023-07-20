import React from 'react';
// import './Navbar.css'
const Navbar: React.FC = () => {

    return (
        <div className="navbar">
        <div className="navbar-brand">Get it done</div>
        <div className="navbar-left">
            <a href="#" className="navbar-button">Button 1</a>
            <a href="#" className="navbar-button">Button 2</a>
            <a href="#" className="navbar-button">Button 3</a>
        </div>
        <div></div>
    </div>
    );
}

export default Navbar;