import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsCommon.css';

/*Import of end components*/
import ProjectsNavigation from '../components/projectNav.jsx';
import ChatLink from '../components/chatlink.jsx';

/*Import of images*/
import backgroundImg1 from '../assets/plabImages/plab_img1.png';
import colourBars from '../assets/plabImages/plab_img2.png';
import fontsImg from '../assets/plabImages/plab_img3.png';
import screensImg from '../assets/plabImages/plab_img4.png';
import uiImg from '../assets/plabImages/plab_img5.png';


function PlabPageDesign() {
  return (
    <>
 
    <img src={backgroundImg1} className='topimage' alt="topimage"/>


    <div className='Page-container'>

        <div className='section1'>
            <div className='path'>
                <Link to="/">Home</Link> / <Link to="/">Projects</Link> / PLAB
            </div>   

            <div className='sec1-Title'>
                <p>Industry 4.0 User Interface for PLAB</p>
            </div>  

            <div className='sec1-Text'>
                <p>PLAB is an Industry 4.0 platform designed to be used in industrial 
                environments, with its target audience being factory workers and 
                higher management. The primary goal of the project was to create 
                an easy-to-use, straightforward user experience that could help 
                streamline users' work processes.
                </p>

                <p>The application is primarily intended for use on desktops with
                larger monitors ranging from 18 to 22 inches in size. Through
                the use of IoT technology, factory machinery is tracked and 
                data is represented, aiding users in their decision-making processes.
                </p>

                <p>PLAB offers an efficient and user-friendly solution for managing
                industrial processes, leveraging the power of IoT data to drive informed
                decision-making.
                </p>
            </div>
        </div>

        <div className='section2'>
            <img src={colourBars} className='section2-image' alt="section2-image"/>

            <div className='sec2-Text'>
                <p>The color palette was carefully selected, taking into account the
                user's needs and the application's environment. Contrast
                colors were chosen that complement the black background of 
                the UI, ensuring ease of use in the industrial environment.
                </p>
            </div>
        </div>

        <div className='section3'>
            <img src={fontsImg} className='section3-image' alt="section3-image"/>

            <div className='sec3-Text'>
                <p>Inter was chosen as the primary typography for the project due to its
                geometric design and web-safe nature. Its clean and modern 
                appearance, combined with excellent legibility, made it a perfect 
                choice for UI design. The font was used consistently throughout the 
                application, adding to the overall visual coherence and providing a 
                seamless user experience. Additionally, the font's versatility allowed 
                for easy integration with other design elements, making it a reliable 
                and flexible choice for the project.
                </p>
            </div>
        </div>

        <div className='section4'> 
            <img src={screensImg} className='section4-image' alt="section4-image"/>
            <div className='Title2'>
                <p>User Interface - Proposed Solution</p>
            </div>
            <div className='Text2'> 
                <p>The main objective of building the e-commerce platform was to provide
                users with a seamless and hassle-free customer journey. The platform
                was designed with a focus on providing users with a premium and 
                luxurious experience. By incorporating features and functionalities
                that prioritize user convenience and satisfaction, the platform enables
                users to shop for products and make purchases with ease and confidence.
                </p>
            </div>
            <img src={uiImg} className='section5-image' alt="section5-image"/>
        </div>    


        <ProjectsNavigation
            prevLink='/shitpapers'
            nextLink='/practiceWork'
        />

        <ChatLink/>

    </div>
    </>
  );
}

export default PlabPageDesign;