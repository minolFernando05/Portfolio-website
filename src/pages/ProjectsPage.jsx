import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

import './ProjectsPage.css';

/*Import of end components*/
import ChatLink from '../components/chatlink.jsx';

/*Import of card images*/
import cardImage1 from '../assets/cardImages/card-1-img.png';
import cardImage2 from '../assets/cardImages/card-2-img.png';
import cardImage3 from '../assets/cardImages/card-3-img.png';
import cardImage4 from '../assets/cardImages/card-4-img.png';
import cardImage5 from '../assets/cardImages/Card1.png';
import cardImage6 from '../assets/cardImages/Card2.png';
import cardImage7 from '../assets/cardImages/Card3.png';
import cardImage8 from '../assets/cardImages/Card4.png';




function ProjectsPageDesign() {
  return (
    <>
    <div className='ProjectPage-container'>
        <div className='projects-content'>
          <div className='projectsPage-title'>
            My Work
          </div>
          <div className='projectsPage-cards'>
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

                <Card
                    imgPath={cardImage5}
                    title="UI/UX Design Sample"
                    description="Sample Work"
                    link={'/sampleWork'}
                />

                <Card
                    imgPath={cardImage6}
                    title="UI/UX Design Sample"
                    description="Sample Work"
                    link={'/sampleWork'}
                />

                <Card
                    imgPath={cardImage7}
                    title="UI/UX Design Sample"
                    description="Sample Work"
                    link={'/sampleWork'}
                />

                <Card
                    imgPath={cardImage8}
                    title="UI/UX Design Sample"
                    description="Sample Work"
                    link={'/sampleWork'}
                />

            </div>

            <ChatLink/>
        </div>
    </div>

    </>
  );
}

export default ProjectsPageDesign;