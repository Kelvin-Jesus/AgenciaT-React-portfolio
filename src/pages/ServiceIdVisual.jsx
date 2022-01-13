import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';

const ServiceIdVisual = () => {
    return (
        <main className="service-page container">
            <Button 
                goToPage="/#servicos"
                text="Voltar"
                className="service-page__btn"
            />
            <Title title="Idêntidade Visual" />

            <div className="service-page__description">
                O serviço de identidade visual é um serviço onde nossa Agência cria uma logo e todos os componentes que compõe uma identidade visual para que sua marca tenha e passe a melhor experiência que o seu cliente possa ter.
            </div>

            <a href="https://api.whatsapp.com/send?phone=5544997490242&text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20de%20Servi%C3%A7o%20de%20Idêntidade%20Visual" className="service-page__wpp-icon">
                <i class="fab fa-whatsapp"></i>
                <div className="service-page__budget">Pedir Orçamento</div>
            </a>

        </main>
    );
}

export default ServiceIdVisual;
