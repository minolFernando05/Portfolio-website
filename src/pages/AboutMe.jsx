import React from 'react';
import { Link } from 'react-router-dom';

import './AboutMe.css';

/*Import of end components*/
import ChatLink from '../components/chatlink.jsx';

/*Import of card images*/
import workImage1 from '../assets/AboutMeImages/aboutMe-img1.png';
import workImage2 from '../assets/AboutMeImages/aboutMe-img2.png';


function AboutMeDesign() {
  return (
    <>
    <div className='AboutMe-container'>
          <div className='AboutMe-content'>

            <div className='AboutMe-title'>
                <h1 className='AboutMe-heading'>I'm a visual storyteller with a technical flare</h1>
            </div>
            
            <div className='AboutMe-text'>
                
                <div className='AboutMe-text-1'>
                <p>My love for design started when I was a teenager creating artworks
                & designing posters for my friends. I pursued my passion for design by 
                getting myself enrolled in a bachelors program in design at the Academy 
                for Multimedia, Design & Technology (AMDT).
                </p>
                </div>

                <div className='AboutMe-text-1'>
                <p>Everyday I’m motivated by the opportunity to solve real problems for
                people. I’m always trying to improve my craft, continue learning, and help
                myself and others grow as designers.
                </p>
                </div>
                
                <div className='AboutMe-text-1'>
                <p>When I'm not designing you'll find me painting sceneries, playing 
                assassins creed, or playing with my dog.
                </p>
                </div>

            </div>

            <div className='Work-section'>
                <h2 className='Work-heading'>Work</h2>

                <div className='Work-img-container'>
                    <Link to="/plab">
                        <img src={workImage1} className='Work-image' alt="work-image"/>
                    </Link>

                    <Link to="/practiceWork">
                        <img src={workImage2} className='Work-image' alt="work-image"/>
                    </Link>
                </div>

            </div>


            <ChatLink/>
          </div>
    </div>

    </>
  );
}

export default AboutMeDesign;