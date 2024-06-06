import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsCommon.css";

/*Import of end components*/
import ProjectsNavigation from "../components/projectNav.jsx";
import ChatLink from "../components/chatlink.jsx";

/*Import of images*/
import backgroundImg1 from "../assets/PracticeWorkImages/practice_work_img1.png";
import img1 from "../assets/PracticeWorkImages/practice_work_img2.png";
import img2 from "../assets/PracticeWorkImages/practice_work_img3.png";
import img3 from "../assets/PracticeWorkImages/practice_work_img4.png";
import img4 from "../assets/PracticeWorkImages/practice_work_img5.png";

function PracticeWorkDesign() {
  return (
    <>
      <img src={backgroundImg1} className="topimage" alt="topimage" />

      <div className="Page-container">
        <div className="section1">
          <div className="path">
            <Link to="/">Home</Link> / <Link to="/">Projects</Link> / Practice Work
          </div>

          <div className="sec1-Title">
            <p>Few of the practice work</p>
          </div>

          <div className='sec1-Text'>
              <p>CadburyChat is a delightful and immersive chat application
              inspired by the captivating world of Cadbury chocolates. It brings
              together.
              </p>
          </div>

        </div>

        <div className="section2">
          <img src={img1} className="section2-image" alt="section2-image" />

          <div className="Title2">
            <p>CadburyChat, Connecting Chocoholics Around the World</p>
          </div>
          <div className="Text2">
            <p>It brings together chocoholics from all corners of the globe, providing them
              with a unique and engaging platform to connect, share their love
              for chocolates, and build a vibrant community. With its intuitive
              user experience, visually appealing interface, and delectable
              features, CadburyChat promises to create a chocolate-filled social
              experience like no other.
            </p>
          </div>
        </div>

        <div className="section3">
          <img src={img2} className="section3-image" alt="section3-image" />

          <div className="sec2-Text">
            <p>
              An dashboard for a social media management system inspired by the
              logo design of{" "}
              <a href="https://dribbble.com/aine" target="_blank">
                Aine
              </a>
            .</p>
          </div>
        </div>

        <div className="section4">
          <img src={img3} className="section4-image" alt="section4-image" />

          <div className="sec3-Text">
            <p>
              Celeron chat is a user-friendly and intuitive mobile application
              designed to facilitate seamless communication and interaction
              between individuals or groups. With a focus on simplicity and
              efficiency, the app aims to provide a delightful chatting
              experience while incorporating modern design principles and
              functionality.
            </p>
          </div>
        </div>

        <div className="section5">
          <img src={img4} className="section5-image" alt="section5-image" />
          <div className="Title2">
            <p>Redesigning the homepage of Ravi Jewellers</p>
          </div>
          <div className="Text2">
            <p>
              The concept redesign of Ravi Jewellers' website home page aims to
              elevate the online shopping experience for their customers,
              showcasing their exquisite jewellery collection in a visually
              stunning and user-friendly manner. The redesigned home page
              features a modern and elegant design that reflects the brand's
              sophistication and attention to detail. Upon arrival, visitors are
              greeted with a captivating hero image that instantly captures
              their attention and conveys the essence of Ravi Jewellers'
              craftsmanship.
            </p>
          </div>
        </div>

      <ProjectsNavigation
        prevLink='/plab'
        nextLink='/datapel'
      />
      <ChatLink />
      
      </div>
    </>
  );
}

export default PracticeWorkDesign;
