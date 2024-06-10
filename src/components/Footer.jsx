import React from 'react';
import { Link } from 'react-router-dom';

//import css
import './Footer.css';

import linkedinLogo from "../assets/socialMediaLogos/linkedin.svg";
import dribbleLogo from "../assets/socialMediaLogos/Dribble.svg";
import instagramLogo from "../assets/socialMediaLogos/instagram.svg";
import twitterLogo from "../assets/socialMediaLogos/twitter.svg";

import FooterLogo from "../assets/FooterLogo.svg";


function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">

          <div className="footer-text">
            <div className="contact-form">
              <Link to="/" className="toForm">Get In Touch</Link>
            </div>
            <div className="mailTo">
            <a href="mailto:ryancomester@gmail.com" className="toMail">ryancomester@gmail.com</a>
            </div>
            <div className="social-media-icons">
              <a href="https://www.linkedin.com/in/ryan-comester" target="_blank">
                <img src={linkedinLogo} alt="linkedin-logo" className="linkedin-logo"/>
              </a>
              <a href="https://dribbble.com/Comester" target="_blank">
                <img src={dribbleLogo} alt="linkedin-logo" className="dribble-logo"/>
              </a>
              <a href="https://www.instagram.com/ryancomester/" target="_blank">
                <img src={instagramLogo} alt="linkedin-logo" className="instagram-logo"/>
              </a>
              <a href="https://x.com/Ryan_Comester" target="_blank">
                <img src={twitterLogo} alt="linkedin-logo" className="twitter-logo"/>
              </a>
            </div>
          </div>

          <div className="footer-logo">
            <Link to="/Portfolio-website" className="footer-logo-link"><img src={FooterLogo} alt="footer-logo"/></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

