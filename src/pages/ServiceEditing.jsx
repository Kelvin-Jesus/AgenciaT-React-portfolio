import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';

const ServiceEditing = () => {
    return (
        <main className="service-page container">
            <Button 
                goToPage="/#servicos"
                text="Voltar"
                className="service-page__btn"
            />
            <Title title="Edição de Vídeo" />

            <div className="service-page__description">
                Edição de Vídeo, criamos e editamos os vídeos para sua empresa... Nós fazemos vídeos para o Youtubue, vídeos para o instagram, vídeos para o Facebook, Vídeos para o Linkedin e Vídeos para Anúncios em qualuqer rede social citada. 
            </div>

            <a href="https://api.whatsapp.com/send?phone=5544997490242&text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20de%20Servi%C3%A7o%20de%20Edição%20de%20Vídeo" className="service-page__wpp-icon">
                <i class="fab fa-whatsapp"></i>
                <div className="service-page__budget">Pedir Orçamento</div>
            </a>

            <img class="logo logo--center" src="/assets/agencia-t9.svg" alt="Logo Agência T9" />

        </main>
    );
}

export default ServiceEditing;
