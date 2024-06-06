import React from "react";
import { Link } from "react-router-dom";

/*Import of end components*/
import ProjectsNavigation from "../components/projectNav.jsx";
import ChatLink from "../components/chatlink.jsx";
import "../pages/ProjectsCommon.css";

const ProjectsPageTemplate = ({
    backgroundImg1,
    projectName,
    sec1Title,sec1Text1,sec1Text2,sec1Text3,
    Img2,sec2Text,
    Img3,sec3Text,
    Img4,sec4Text,
    Img5,sec5Text,sec5_Title2,sec5_Text2,
    Img6,sec6Text,sec6_Title2,sec6_Text2,
    Img7,sec7Text,sec7_Title2,sec7_Text2,
    Img8,sec8Text,sec8_Title2,sec8_Text2,

    prevPage,nextPage,
}) => {
  return (
    <>
      <img src={backgroundImg1} className="topimage" alt="section1-image" />

      <div className="Page-container">
        <div className="section1">
          <div className="path">
            <Link to="/">Home</Link> / <Link to="/">Projects</Link> /{" "}
            {projectName}
          </div>

          <div className="sec1-Title">
            <p>{sec1Title}</p>
          </div>

          <div className="sec1-Text">
            <p>{sec1Text1}</p>
            <p>{sec1Text2}</p>
            <p>{sec1Text3}</p>
          </div>
        </div>

        <div className="section2">
          <img src={Img2} className="section2-image" alt="section2-image" />

          <div className="sec2-Text">
            <p>{sec2Text}</p>
          </div>
        </div>

        <div className="section3">
          <img src={Img3} className="section3-image" alt="section3-image" />

          <div className="sec3-Text">
            <p>{sec3Text}</p>
          </div>
        </div>

        <div className="section4">
          <img src={Img4} className="section4-image" alt="section4-image" />

          <div className="sec4-Text">
            <p>{sec4Text}</p>
          </div>
        </div>

        <div className="section5">
          {Img5 && (
            <img src={Img5} className="section5-image" alt="section5-image" />
          )}

          <div className="sec5-Text">
            <p>{sec5Text}</p>
          </div>

          <div className="Title2">
            <p>{sec5_Title2}</p>
          </div>

          <div className="Text2">
            <p>{sec5_Text2}</p>
          </div>

        </div>

        <div className="section6">
          {Img6 && (
            <img src={Img6} className="section6-image" alt="section6-image" />
          )}

          <div className="sec6-Text">
            <p>{sec6Text}</p>
          </div>

          <div className="Title2">
            <p>{sec6_Title2}</p>
          </div>

          <div className="Text2">
            <p>{sec6_Text2}</p>
          </div>

        </div>

        <div className="section7">

          <div className="sec7-Text">
            <p>{sec7Text}</p>
          </div>

          <div className="Title2">
            <p>{sec7_Title2}</p>
          </div>

          <div className="Text2">
            <p>{sec7_Text2}</p>
          </div>

          {Img7 && (
            <img src={Img7} className="section7-image" alt="section7-image" />
          )}

        </div>

        <div className="section8">

          <div className="sec8-Text">
            <p>{sec8Text}</p>
          </div>

          <div className="Title2">
            <p>{sec8_Title2}</p>
          </div>

          <div className="Text2">
            <p>{sec8_Text2}</p>
          </div>

          {Img8 && (
            <img src={Img8} className="section8-image" alt="section8-image" />
          )}

        </div>

        <ProjectsNavigation prevLink={prevPage} nextLink={nextPage} />
        <ChatLink />
      </div>
    </>
  );
};

// conditional rendering of Img to use default value if not provided
ProjectsPageTemplate.defaultProps = {
    Img5: null,
  };

export default ProjectsPageTemplate;
