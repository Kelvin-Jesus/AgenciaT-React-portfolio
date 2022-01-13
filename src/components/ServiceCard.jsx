import React from 'react';

import Button from './Button';

const ServiceCard = (props) => {

    let textDescription = props?.cardDescription?.length > 27 
                            ? props?.cardDescription.slice(0, 27) + '...' 
                            : props?.cardDescription 
    return (
        <article className="service-card">

            <a href={props.goToPage}>

            <header className="service-card__img-container">
                <img 
                    loading="lazy"
                    className="service-card__img" 
                    src={props?.imgLink} 
                    alt={props?.imgAlt} 
                />
            </header>

            <main>

                <h3 className="service-card__title">{props?.cardTitle}</h3>
                <p className="service-card__description">{textDescription}</p>

                <Button 
                    goToPage={props.goToPage}
                    text="Saiba Mais"
                    className="service-card__btn"
                />

            </main>

            </a>

        </article>
    );
}

export default ServiceCard;
