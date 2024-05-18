import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";

import Img1 from "./assets/picture1.png";
import Img2 from "./assets/picture2.png";
import Img3 from "./assets/picture3.png";

function App() {
    return(
        <>
        <Header/>
        <Food/>
        <div className="CardView">
            <Card
                imgPath={Img1}
                title="UI/UX Design "
                description="ShitPapers"
            />
            <Card
                imgPath={Img2}
                title="Branding & UI/UX Design "
                description="Datapel Mobility Assistant"
            />
            <Card
                imgPath={Img3}
                title="UI/UX Design "
                description="PLAB"
            />
        </div>

        <Footer/>
        </>
    );
}

export default App
