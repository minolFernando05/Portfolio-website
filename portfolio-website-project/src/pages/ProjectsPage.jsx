import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

/*Import of end components*/
import ChatLink from '../components/chatlink.jsx';

/*Import of card images*/
import cardImage1 from '../assets/cardImages/card-1-img.png';
import cardImage2 from '../assets/cardImages/card-2-img.png';
import cardImage3 from '../assets/cardImages/card-3-img.png';
import cardImage4 from '../assets/cardImages/card-4-img.png';




function ProjectsPageDesign() {
  return (
    <>
          <div className='projects'>
          <div className='projects-title'>
              <p>Projects</p>
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

          </div>
          </div>

    <ChatLink/>

    </>
  );
}

export default ProjectsPageDesign;