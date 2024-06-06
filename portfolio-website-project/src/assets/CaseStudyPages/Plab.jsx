import React from 'react';
import ProjectsPageTemplate from "../../components/ProjectsPageTemplate";



/*Import of images*/
import backgroundImg1 from '../plabImages/plab_img1.png';
import colourBars from '../plabImages/plab_img2.png';
import fontsImg from '../plabImages/plab_img3.png';
import screensImg from '../plabImages/plab_img4.png';
import uiImg from '../plabImages/plab_img5.png';


function PlabPageDesign() {
  return (
    <>
        <ProjectsPageTemplate

            backgroundImg1={backgroundImg1}
            projectName="PLAB"
            sec1Title="Industry 4.0 User Interface for PLAB"
            sec1Text1="PLAB is an Industry 4.0 platform designed to be used in industrial 
                    environments, with its target audience being factory workers and 
                    higher management. The primary goal of the project was to create 
                    an easy-to-use, straightforward user experience that could help 
                    streamline users' work processes."
            sec1Text2="The application is primarily intended for use on desktops with
                    larger monitors ranging from 18 to 22 inches in size. Through
                    the use of IoT technology, factory machinery is tracked and 
                    data is represented, aiding users in their decision-making processes."
            sec1Text3="PLAB offers an efficient and user-friendly solution for managing
                    industrial processes, leveraging the power of IoT data to drive informed
                    decision-making."

            Img2={colourBars}
            sec2Text="The color palette was carefully selected, taking into account the
                    user's needs and the application's environment. Contrast
                    colors were chosen that complement the black background of 
                    the UI, ensuring ease of use in the industrial environment."

            Img3={fontsImg}
            sec3Text="Inter was chosen as the primary typography for the project due to its
                    geometric design and web-safe nature. Its clean and modern 
                    appearance, combined with excellent legibility, made it a perfect 
                    choice for UI design. The font was used consistently throughout the 
                    application, adding to the overall visual coherence and providing a 
                    seamless user experience. Additionally, the font's versatility allowed 
                    for easy integration with other design elements, making it a reliable 
                    and flexible choice for the project."

            Img4={screensImg}
            sec4_Title2="User Interface - Proposed Solution"
            sec4_Text2="The main objective of building the e-commerce platform was to provide
                    users with a seamless and hassle-free customer journey. The platform
                    was designed with a focus on providing users with a premium and 
                    luxurious experience. By incorporating features and functionalities
                    that prioritize user convenience and satisfaction, the platform enables
                    users to shop for products and make purchases with ease and confidence."

            Img5={uiImg}

            prevPage={"/shitpapers"}
            nextPage={"/practiceWork"}

        
        />
    </>
  );
}

export default PlabPageDesign;






