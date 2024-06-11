// ProjectsPageTemplate.jsx
import React from "react";
import { Link } from "react-router-dom";
import SectionComponent from "../components/SectionComponent";
import ProjectsNavigation from "../components/projectNav.jsx";
import ChatLink from "../components/chatlink.jsx";
import "./ProjectsPageTemplate.css";

const ProjectsPageTemplate = ({
  backgroundImg1,
  projectName,
  sec1Title,sec1Text1,sec1Text2,sec1Text3,
  Img2,sec2Text,sec2_Title2,sec2_Text2,
  Img3,sec3Text,sec3_Title2,sec3_Text2,
  Img4,sec4Text,sec4_Title2,sec4_Text2,
  Img5,sec5Text,sec5_Title2,sec5_Text2,
  Img6,sec6Text,sec6_Title2,sec6_Text2,
  Img7,sec7Text,sec7_Title2,sec7_Text2,
  Img8,sec8Text,sec8_Title2,sec8_Text2,
  Img9,sec9Text,sec9_Title2,sec9_Text2,
  prevPage,
  nextPage
}) => {
  return (
    <>
    <div className="ProjectsPage-container">
      
      <img src={backgroundImg1} className="topimage" alt="section1-image" />

      <div className="content-container">
        <div className="section1">
          <div className="path">
            <Link to="/home">Home</Link> / <Link to="/projectsPage">Projects</Link> /{" "}
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

        <SectionComponent
          imgSrc={Img2}
          imgAlt="section2-image"
          text={sec2Text}
          title2={sec2_Title2}
          text2={sec2_Text2}
          sectionClass="section2"
          imgClass="section2-image"
          textClass="sec2-Text"
          titleClass="Title2"
          text2Class="Text2"
        />

        <SectionComponent
          imgSrc={Img3}
          imgAlt="section3-image"
          text={sec3Text}
          title2={sec3_Title2}
          text2={sec3_Text2}
          sectionClass="section3"
          imgClass="section3-image"
          textClass="sec3-Text"
          titleClass="Title2"
          text2Class="Text2"
        />

        <SectionComponent
          imgSrc={Img4}
          imgAlt="section4-image"
          text={sec4Text}
          title2={sec4_Title2}
          text2={sec4_Text2}
          sectionClass="section4"
          imgClass="section4-image"
          textClass="sec4-Text"
          titleClass="Title2"
          text2Class="Text2"
        />

        <SectionComponent
          imgSrc={Img5}
          imgAlt="section5-image"
          text={sec5Text}
          title2={sec5_Title2}
          text2={sec5_Text2}
          sectionClass="section5"
          imgClass="section5-image"
          textClass="sec5-Text"
          titleClass="Title2"
          text2Class="Text2"
        />

        <SectionComponent
          imgSrc={Img6}
          imgAlt="section6-image"
          text={sec6Text}
          title2={sec6_Title2}
          text2={sec6_Text2}
          sectionClass="section6"
          imgClass="section6-image"
          textClass="sec6-Text"
          titleClass="Title2"
          text2Class="Text2"
        />

        <SectionComponent
          imgSrc={Img7}
          imgAlt="section7-image"
          text={sec7Text}
          title2={sec7_Title2}
          text2={sec7_Text2}
          sectionClass="section7"
          imgClass="section7-image"
          textClass="sec7-Text"
          titleClass="Title2"
          text2Class="Text2"
        />

        <SectionComponent
          imgSrc={Img8}
          imgAlt="section8-image"
          text={sec8Text}
          title2={sec8_Title2}
          text2={sec8_Text2}
          sectionClass="section8"
          imgClass="section8-image"
          textClass="sec8-Text"
          titleClass="Title2"
          text2Class="Text2"
        />

        <SectionComponent
            imgSrc={Img9}
            imgAlt="section9-image"
            text={sec9Text}
            title2={sec9_Title2}
            text2={sec9_Text2}
            sectionClass="section9"
            imgClass="section9-image"
            textClass="sec9-Text"
            titleClass="Title2"
            text2Class="Text2"
        />

        <ProjectsNavigation prevLink={prevPage} nextLink={nextPage} />
        <ChatLink />
      </div>
    </div>  
    </>
  );
};

// ProjectsPageTemplate.defaultProps = {
//     Img2: null,sec2Text: '',sec2_Title2: '',sec2_Text2: '',
//     Img3: null,sec3Text: '',sec3_Title2: '',sec3_Text2: '',
//     Img4: null,sec4Text: '',sec4_Title2: '',sec4_Text2: '',
//     Img5: null,sec5Text: '',sec5_Title2: '',sec5_Text2: '',
//     Img6: null,sec6Text: '',sec6_Title2: '',sec6_Text2: '',
//     Img7: null,sec7Text: '',sec7_Title2: '',sec7_Text2: '',
//     Img8: null,sec8Text: '',sec8_Title2: '',sec8_Text2: '',
//     Img9: null,sec9Text: '',sec9_Title2: '',sec9_Text2: '',
// };

export default ProjectsPageTemplate;
