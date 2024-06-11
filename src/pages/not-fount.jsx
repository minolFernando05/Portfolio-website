import React from 'react';
import { Link } from 'react-router-dom';

import './not-fount.css';


function notFountDesign() {
    return (

        <div className="not-fount-background-container">
            <div className="not-fount-background-image">

                <div className="not-fount-text-content">
                    <h2 className="not-found-title">Page Not Found</h2>

                    <p className="not-found-description">
                        Now, pretend like you didn't see anything and turn back.
                    </p>
                    
                    <Link to="/" className="not-found-home-button">
                        Return Home
                    </Link>
                </div>

            </div>
      </div>
    );
}

export default notFountDesign;