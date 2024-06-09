import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import HeroBackground from '../assets/HeroBackground.png';
import Card from '../components/Card';


/*Import of card images*/
import cardImage1 from '../assets/cardImages/card-1-img.png';
import cardImage2 from '../assets/cardImages/card-2-img.png';
import cardImage3 from '../assets/cardImages/card-3-img.png';
import cardImage4 from '../assets/cardImages/card-4-img.png';


function Home() {
  return (
    <>
      <div className='HomePage-container'>

      <div className='intro'>
          <div className='intro-text'>
              <h1 className="heading">Hello, I am a <b>UI/UX designer</b> based off Colombo, Sri Lanka.</h1>
          </div>
          <img src={HeroBackground} className='intro-image' alt="hero-background"/>
      </div>


      <div className='about'>
          <div className='about-title'>
              <h2  className="heading2">About Me</h2>
          </div>
          <div className='about-text'>
              <div className='about-text-main'>
                  <p>I create <span className="highlight">user-centered designs</span> for  
                  <span className="highlight"> digital products</span> and
                  <span className="highlight"> interfaces</span>, ensuring the user an enjoyable experience</p>
              </div>
              <div className='about-text-sub'>
                  <p>I am a User Experience Designer based in Sri Lanka with 6 months of experience in the field. 
                      I am passionate about creating designs that are centered around the user and their needs. 
                      I believe that good design should be intuitive, easy to use and visually appealing. 
                      I am particularly interested in typography and its role in enhancing the overall user experience. 
                      I strive to create designs that are not only functional but also beautiful. 
                      I am constantly learning and expanding my skillset to stay up to date with the latest design trends and technologies. 
                      I am excited to continue growing and developing as a designer, and to use my skills to create 
                      user-centered designs that make a positive impact on people's lives.</p>
              </div>
          </div>
      </div>

      <div className='projects'>
          <div className='projects-title'>
              <h2  className="heading2">Projects</h2>
          </div>
          <div className='projects-cards'>
              <Card
                  imgPath={cardImage1}
                  title="UI/UX Design"
                  description="Datapel Mobility Assistant"
                  link={'/datapel'}
              />

              <Card
                  imgPath={cardImage2}
                  title="UI/UX Design & Branding"
                  description="ShitPapers"
                  link={'/shitPapers'}
              />

              <Card
                  imgPath={cardImage3}
                  title="UI/UX Design "
                  description="PLAB"
                  link={'/plab'}
              />

              <Card
                  imgPath={cardImage4}
                  title="UI/UX Design & Branding"
                  description="Practice Work"
                  link={'/practiceWork'}
              />

            {/* <div className='viewMore_card'>
                <Link to="/projectsPage">
                View More {" "}
                <img src={arrow} className="arrow" alt="arrow" />
                </Link>
            </div> */}

          </div>
      </div>

      </div>
    </>
  );
}

export default Home;