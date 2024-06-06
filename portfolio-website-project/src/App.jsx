import Header from "./Header.jsx"
import Footer from "./components/Footer.jsx";
import Food from "./Food.jsx";
import React from "react";
import NavBar from "./components/NavBar.jsx";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";


import Home from './pages/Home';
import Datapel from './assets/CaseStudyPages/Datapel.jsx';
import ShitPapers from './assets/CaseStudyPages/ShitPapers.jsx';
import Plab from './assets/CaseStudyPages/Plab.jsx';
import PracticeWork from "./assets/CaseStudyPages/PracticeWork.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";


function App() {
    return(
    <>
    <ScrollToTop />
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/datapel" element={<Datapel/>}/>
        <Route path="/shitPapers" element={<ShitPapers/>}/>
        <Route path="/plab" element={<Plab/>}/>
        <Route path="/practiceWork" element={<PracticeWork/>}/>
        <Route path="/projectsPage" element={<ProjectsPage/>}/>


        <Route/>
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