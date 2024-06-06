import React from "react";
import ProjectsPageTemplate from "../components/ProjectsPageTemplate";

/*Import of end components*/
import ProjectsNavigation from "../components/projectNav.jsx";
import ChatLink from "../components/chatlink.jsx";
import "../pages/ProjectsCommon.css";

/*Import of images*/
import backgroundImg1 from "../assets/PracticeWorkImages/practice_work_img1.png";
import img2 from "../assets/PracticeWorkImages/practice_work_img2.png";
import img3 from "../assets/PracticeWorkImages/practice_work_img3.png";
import img4 from "../assets/PracticeWorkImages/practice_work_img4.png";
import img5 from "../assets/PracticeWorkImages/practice_work_img5.png";

const TestPage = () => {
  return (
    <>
      <ProjectsPageTemplate
        backgroundImg1={backgroundImg1}
        sec1Title="Few of the practice work"

        sec1Text1="CadburyChat is a delightful and immersive chat 
            application inspired by the captivating world of Cadbury chocolates. 
            It brings together."

        Img2={img2}
        projectName="Practice Work"

        Img3={img3}
        Img5={img5}
        
        


        prevPage={"/plab"}
        nextPage={"/datapel"}


      />
    </>
  );
};

export default TestPage;
