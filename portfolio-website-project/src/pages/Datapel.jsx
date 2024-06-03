import React from 'react';
import './Datapel.css';

/*Import of images*/
import BackgroundImg1 from '../assets/datapel_img1.png';





function DatapelPageDesign() {
  return (
    <>
    <div className='DatapelPage-container'>

        <div className='section1'>
        <img src={BackgroundImg1} className='section1-image' alt="section1-image"/>
        </div>

       
    </div>
    </>
  );
}

export default DatapelPageDesign;