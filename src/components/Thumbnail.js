// Thumbnails component for portfolio page
// Show all available projects

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/thumbnail.css';

const Thumbnail = ({ id, img, name, description, period, tags, url })  => {
    const images = require.context('../assets/projects', true);
    //console.log(img);
    return(
        <div class="thumbnail">
            <img class="thumbnail" alt={name ? name : "image alt"} src={img ? images(`./${img}.png`) : `https://dummyimage.com/400x250/cccccc/fff`} width="400" height="250"/>
            <h1>{name ? name : "Title"}</h1>
            <p>{description ? description : "A cool description about project"}</p>
            <NavLink key={id} to={url}>Read more...</NavLink>
        </div>
    );
};

export default Thumbnail;
