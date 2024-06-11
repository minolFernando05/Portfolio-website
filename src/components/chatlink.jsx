import React from 'react';
import { Link } from 'react-router-dom';

import './chatlink.css';



function chatLink() {
    return (
        <div className='chatLink'>
            <div className='main'>
                Interested in my work?
            </div>
            <div className='sub'>
                <Link to="/contactForm">
                Let's chat &#8594;
                </Link>
            </div>
        </div>
    );
}

export default chatLink;