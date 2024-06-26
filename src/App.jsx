import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";


//Scrool and transition effects
import ScrollToTop from "./components/ScrollToTop.jsx";

//case studies Pages
import Home from './pages/Home';
import Datapel from './assets/CaseStudyPages/Datapel.jsx';
import ShitPapers from './assets/CaseStudyPages/ShitPapers.jsx';
import Plab from './assets/CaseStudyPages/Plab.jsx';
import PracticeWork from "./assets/CaseStudyPages/PracticeWork.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import NotFound from "./pages/not-fount.jsx";


function App() {
    return(
    <>
    <ScrollToTop />
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/datapel" element={<Datapel/>}/>
        <Route path="/shitPapers" element={<ShitPapers/>}/>
        <Route path="/plab" element={<Plab/>}/>
        <Route path="/practiceWork" element={<PracticeWork/>}/>
        <Route path="/projectsPage" element={<ProjectsPage/>}/>
        <Route path="/contactForm" element={<ContactForm/>}/>
        <Route path="/aboutMe" element={<AboutMe/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
    )
}

export default App

// function App() {
//     return(
//         <>
//         <NavBar/>
//         <Home/>


//         <Footer/>
//         </>
//     );
// }