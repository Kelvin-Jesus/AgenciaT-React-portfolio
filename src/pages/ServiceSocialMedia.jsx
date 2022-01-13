import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';

const ServiceSocialMedia = () => {
    return (
        <main className="service-page container">
            <Button 
                goToPage="/#servicos"
                text="Voltar"
                className="service-page__btn"
            />
            <Title title="Social Media" />

            <div className="service-page__description">
                Social media é um serviço onde nós designers da Agência T9 fazemos: Postagens para suas redes sociais como Instagram, Facebook, Linkedin e outras redes sociais que sua marca tenha...
                Fazemos também capas para o seu canal no youtube, capa para o Facebook, capa para o Linkedin, thumbnails para seus vídeos, Capas para Ebook, Design de Ebook.
            </div>

            <a href="https://api.whatsapp.com/send?phone=5544997490242&text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20de%20Servi%C3%A7o%20de%20Social%20Media" className="service-page__wpp-icon">
                <i class="fab fa-whatsapp"></i>
                <div className="service-page__budget">Pedir Orçamento</div>
            </a>

            <img class="logo logo--center" src="/assets/agencia-t9.svg" alt="Logo Agência T9" />

        </main>
    );
}

export default ServiceSocialMedia;
