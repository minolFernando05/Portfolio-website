import React from "react";
import ProjectsPageTemplate from "../../components/ProjectsPageTemplate";


/*Import of images*/
import backgroundImg1 from "../PracticeWorkImages/practice_work_img1.png";
import img2 from "../PracticeWorkImages/practice_work_img2.png";
import img3 from "../PracticeWorkImages/practice_work_img3.png";
import img4 from "../PracticeWorkImages/practice_work_img4.png";
import img5 from "../PracticeWorkImages/practice_work_img5.png";

function PracticeWorkDesign() {
  return (
    <>
      <ProjectsPageTemplate
          backgroundImg1={backgroundImg1}
          projectName="Practice Work"

          sec1Title="Few of the practice work"
          sec1Text1="These are the projects I completed in my leisure time to 
                  enhance my skills as a UI/UX designer. Each project was an 
                  opportunity to experiment with new design techniques, refine
                  my creative process, and stay updated with the latest 
                  trends and best practices in the industry. By challenging
                  myself with diverse and complex design problems, I was able 
                  to grow both technically and creatively."

          Img2={img2}
          sec2_Title2="CadburyChat, Connecting Chocoholics Around the World"
          sec2_Text2="It brings together chocoholics from all corners of the globe, providing them
                  with a unique and engaging platform to connect, share their love
                  for chocolates, and build a vibrant community. With its intuitive
                  user experience, visually appealing interface, and delectable
                  features, CadburyChat promises to create a chocolate-filled social
                  experience like no other."

          Img3={img3}
          sec3Text="An dashboard for a social media management system inspired by the
          logo design of Aine."

          Img4={img4}
          sec4Text="Celeron chat is a user-friendly and intuitive mobile application
                  designed to facilitate seamless communication and interaction
                  between individuals or groups. With a focus on simplicity and
                  efficiency, the app aims to provide a delightful chatting
                  experience while incorporating modern design principles and
                  functionality."

          Img5={img5}
          sec5_Title2="Redesigning the homepage of Ravi Jewellers"
          sec5_Text2="The concept redesign of Ravi Jewellers' website home page aims to
                  elevate the online shopping experience for their customers,
                  showcasing their exquisite jewellery collection in a visually
                  stunning and user-friendly manner. The redesigned home page
                  features a modern and elegant design that reflects the brand's
                  sophistication and attention to detail. Upon arrival, visitors are
                  greeted with a captivating hero image that instantly captures
                  their attention and conveys the essence of Ravi Jewellers'
                  craftsmanship."


          prevPage={"/plab"}
          nextPage={"/datapel"}


        />
      </>

  );
}

export default PracticeWorkDesign;



