import React,{useState} from 'react';
import './NavBar.css';
import navLogo from "../assets/ryan-web-logo.svg";

// import Img1 from "./assets/NavBarLogo.png";

function NavBar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <img src={navLogo} alt="navigation-bar-logo" />
            </div>
        </nav>
        </>

    );
}

export default NavBar;