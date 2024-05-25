import React from 'react';
import Card from '../Card';
import Footer from '../components/Footer';
import HeroSection from '../HeroSection';


function Home() {
  return (
    <>
        <HeroSection/>
        <div className="CardView">
            <Card
                imgPath="../assets/picture1.png"
                title="UI/UX Design "
                description="ShitPapers"
            />
                        <Card
                imgPath="./assets/picture1.png"
                title="UI/UX Design "
                description="ShitPapers"
            />
            <Card
                imgPath="./assets/picture1.png"
                title="UI/UX Design "
                description="ShitPapers"
            />
            <Card
                imgPath="./assets/picture1.png"
                title="UI/UX Design "
                description="ShitPapers"
            />
        </div>
    </>
  );
}

export default Home;