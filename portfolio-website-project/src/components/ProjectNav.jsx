import React from 'react';
import { Link } from 'react-router-dom';

import './projectNav.css';



function ProjectNav(
    {
        prevLink,
        nextLink
    }
) {
    return (

        <div className='navigation'>
        {/* < Previous   •   Next  > */}
        <Link to={prevLink}>
        &lt; 
        &nbsp; 
        Previous 
        </Link>
        &nbsp;
        &nbsp; 
        &#x2022; 
        &nbsp;
        &nbsp;
        <Link to={nextLink}>
        Next 
        &nbsp;
        &gt;
        </Link>

    {/*
    < (less than) = &lt;
    > (greather than) = &gt; 
    &nbsp; = non-breaking space
    &#x2022; = bullet point
    */}

    </div>


    );
}

export default ProjectNav;