import React,{useState} from 'react';
import './NavBar.css';
import navLogo from "../assets/ryan-web-logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faBars} from '@fortawesome/free-solid-svg-icons'




// import Img1 from "./assets/NavBarLogo.png";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenue = () => setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <img className='navbarlogo' src={navLogo} alt="navigation-bar-logo" />
                <div className="menueIcon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faBars : faXmark}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="/" className='nav-links' onClick={closeMobileMenue}>
                            About Me
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="/about" className='nav-links' onClick={closeMobileMenue}>
                            Projects
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="/services" className='nav-links' onClick={closeMobileMenue}>
                            Skills
                        </a>    
                    </li>
                </ul>
            </div>
        </nav>
        </>

    );
}

export default NavBar;

{/* <FontAwesomeIcon icon={faXmark} rotation={90} beat /> */}
                {/* const element = <FontAwesomeIcon icon={faHippo}/>
                const element = <FontAwesomeIcon icon={faHouse} rotation={90} beat />
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon="fa-light fa-house" /> */}