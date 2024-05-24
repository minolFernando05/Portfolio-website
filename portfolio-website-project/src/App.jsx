import Header from "./Header.jsx"
import Footer from "./components/Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import React from "react";
import NavBar from "./components/NavBar.jsx";

import Img1 from "./assets/picture1.png";
import Img2 from "./assets/picture2.png";
import Img3 from "./assets/picture3.png";
import Img4 from "./assets/picture4.png";

import Home from './pages/Home';


function App() {
    return(
        <>
        <NavBar/>
        <Home/>


        <Footer/>
        </>
    );
}

export default App
