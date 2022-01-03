import React from 'react';

const PortfolioLink = (props) => {
    return (
        <a href={props?.postLink} class="portfolio__grid-item" >
            <img 
                loading="lazy"
                class="portfolio__grid-img"
                src={props?.imgLink} 
                alt={props?.imgDescription} 
            />
        </a>
    );
}

export default PortfolioLink;
