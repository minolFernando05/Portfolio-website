import React,{useState,useEffect} from 'react';
import './NavBar.css';
import navLogo from "../assets/ryan-web-logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faBars} from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button';
import { Link } from 'react-router-dom';


// import Img1 from "./assets/NavBarLogo.png";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() =>{
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });


    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className='navbar-logo' src={navLogo} onClick={closeMobileMenu}>
                    <img src={navLogo} alt="navigation-bar-logo"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faXmark : faBars}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/food" className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a href="/about" className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="/services" className='nav-links' onClick={closeMobileMenu}>
                            Skills
                        </a>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up'className='nav-links-mobile' onClick={closeMobileMenu}>
                            Get in Touch
                        </Link>
                    </li>
                </ul>
                <div className="nav-btn">
                    {button && <Button buttonStyle='btn--primary'>Get in Touch</Button>}
                </div>
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