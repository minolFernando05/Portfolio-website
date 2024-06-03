import Header from "./Header.jsx"
import Footer from "./components/Footer.jsx";
import Food from "./Food.jsx";
import React from "react";
import NavBar from "./components/NavBar.jsx";
import { Route, Routes } from "react-router-dom";


import Home from './pages/Home';
import Datapel from './pages/Datapel';

function App() {
    return(
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/datapel" element={<Datapel/>}/>
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