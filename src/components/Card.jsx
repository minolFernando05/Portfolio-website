import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

function Card(
    {
        imgPath,
        title,
        description,
        link
    }
)
{
    return (
        <div className="card-container">
            <Link to={link}>
                <img className='card-image' src={imgPath} alt="" />
                <div className='inner-card-textbody'>
                    <p className='card-title'>{title}</p>
                    <p className='card-text'>{description}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;