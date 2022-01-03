import React from 'react';

import Title from '../components/Title.jsx'
import ServiceCard from '../components/ServiceCard.jsx';

const Services = () => {
    return (
        <section className="container service" id="servicos">

            <Title title="Serviços" sectionName="service__title" />

            <div className="service__cards">

                <ServiceCard
                    imgLink='assets/imgs/service-1.png'
                    imgAlt='Serviço de Social Media'
                    cardTitle='Social Media'
                    cardDescription="Posts para o instagram e Facebook"
                    goToPage="social-media"
                />

                <ServiceCard
                    imgLink='assets/imgs/service-2.png'
                    imgAlt='Serviço de Id. Visual'
                    cardTitle='Id. Visual'
                    cardDescription="Criação de Logomarca"
                    goToPage="id-visual"
                />
                
                <ServiceCard
                    imgLink='assets/imgs/service-3.png'
                    imgAlt='Serviço de Edição de Vídeo'
                    cardTitle='Edição de Vídeo'
                    cardDescription="Videos Editados"
                    goToPage="edicao"
                />

            </div>


            
        </section>
    );
}

export default Services;
