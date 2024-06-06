import React from "react";
import ProjectsPageTemplate from "../components/ProjectsPageTemplate";

/*Import CSS*/
import "../pages/ProjectsCommon.css";

/*Import of images*/
import backgroundImg1 from '../assets/datapelImages/datapel_img1.png';
import colourBars from '../assets/datapelImages/datapel_img2.png';
import fontsImg from '../assets/datapelImages/datapel_img3.png';
import screensImg from '../assets/datapelImages/datapel_img4.png';
import uiImg from '../assets/datapelImages/datapel_img5.png';


const Datapel = () => {
  return (
    <>
      <ProjectsPageTemplate

        backgroundImg1={backgroundImg1}
        projectName="Datapel Mobility Assistant"

        sec1Title="Enhancing user experience for on-the-go wearhouse workers"
        sec1Text1="Datapel is an Australian based B2B warehouse management
                  software (WMS) provider with an international clientele
                  of enterprises. Their mobility assistant was designed
                  to target warehouse workers who are constantly on-the-go, 
                  with the application used on Android barcode scanners. 
                  They sought to enhance productivity and efficiency for warehouse workers,
                  especially younger generations, by creating an intuitive,
                  user-friendly UI through a complete overhaul of their mobility assistant."

                  
        Img2={colourBars}
        sec2Text="The colors selected for this project were primarily based on 
                   the existing branding, with additional colors chosen to enhance
                   the user experience. The aim was to provide users with a more
                   comprehensive and satisfying experience while still staying true
                   to the project's established branding."

        Img3={fontsImg}
        sec3Text="Typography has been a major focus in the UI design of the project. 
                  Space Grotesk has been used as the primary font, selected for its modern
                  and clean appearance. Inter, a versatile font with good legibility,
                  has been used as the secondary font. One of the key objectives of the 
                  project was to optimize the text for display on a 5-inch barcode scanner.
                  This required careful consideration of font size, spacing, and other typographic
                  elements to ensure that the text is visually appealing and easy to read on the
                  scanner's display."

        Img4={screensImg}
        sec4Text="A clean, minimalistic and user-friendly interface that allows for seamless 
                  navigation through key functions such as checkout and despatch. 
                  Color selection was a major consideration in creating a pleasing user experience,
                  while strategically placing primary calls-to-action within easy reach of the user's
                  thumb was also a key factor. These design choices reflect a commitment to user-centered
                  design principles and best practices in UI/UX design."


        Img5={uiImg}
        
        prevPage={"/practiceWork"}
        nextPage={"/shitPapers"}


      />
    </>
  );
};

export default Datapel;

