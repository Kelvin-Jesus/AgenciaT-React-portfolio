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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptates veritatis nobis a aliquam placeat neque, laboriosam consequatur corporis exercitationem quaerat sit ipsa unde odit maiores quidem ipsum impedit aliquid?
                Consequatur nam quibusdam quia, magni incidunt molestiae ea recusandae est eius. Eveniet delectus quod voluptatum eligendi incidunt esse similique. Consectetur quibusdam corporis animi, quaerat possimus id iure illo unde eveniet?
                Consequuntur vel, adipisci numquam eligendi odit veritatis! Minima laborum sint obcaecati, atque nemo dolorum nulla quaerat autem beatae vitae iusto eos eius tenetur aspernatur consequuntur. Laboriosam ullam odit ducimus aspernatur?
            </div>

            <a href="https://api.whatsapp.com/send?phone=5544997490242&text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20de%20Servi%C3%A7o%20de%20Edição%20de%20Vídeo" className="service-page__wpp-icon">
                <i class="fab fa-whatsapp"></i>
                <div className="service-page__budget">Pedir Orçamento</div>
            </a>

        </main>
    );
}

export default ServiceEditing;
