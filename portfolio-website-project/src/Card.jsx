import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

function Card(
    {
        imgPath,
        title,
        description
    }
)
{
    return (
        <div className="card-container">
            <img className='card-image' src={imgPath} alt="" />
            <div className='inner-card-textbody'>
                <p className='card-title'>{title}</p>
                <p className='card-text'>{description}</p>
            </div>
        </div>
    );
}

export default Card;