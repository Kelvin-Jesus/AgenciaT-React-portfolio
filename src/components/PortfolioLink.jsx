import React from 'react';

const PortfolioLink = (props) => {
    return (
        <a href={props?.postLink} class="portfolio__grid-item" target="_blank" rel="noreferrer" >
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
