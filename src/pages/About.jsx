import React from "react";

import Title from "../components/Title.jsx";
import Logo from "../components/Logo.jsx";

const About = () => {
    return (
        <section className="about" id="sobre">
            <svg class="bubble-icon1"width="323" height="354" viewBox="0 0 323 354" fill="none">
                <path d="M20.1095 144.64C-34.6905 124.64 20.1095 -52.86 214.109 15.64C408.109 84.14 295.609 309.44 223.609 340.64C133.609 379.64 100.609 320.64 104.109 262.64C107.609 204.64 88.6095 169.64 20.1095 144.64Z" fill="#3600AA"/>
                <circle cx="32.1094" cy="201.64" r="27" fill="#3600AA"/>
                <circle cx="70.1094" cy="239.64" r="11" fill="#3600AA"/>
            </svg>
            <div className="container">

                <Title title="Sobre" sectionName="about__title" />
                <main className="about__content">
                    Olá, somos a Agencia T9, nós somos uma agencia de design responsável por deixar sua marca mais atraente aos olhos do seu cliente.
                    Nossa agencia presta serviços como Identidade Visual, Postagens para Instagram, Facebook e outras redes sociais que sua marca/empresa tenha... E Edição de Vídeo.

                    Além de postagens para suas redes sociais nós também podemos fazer: Capa para seu canal no youtube; Thumbnails para seus vídeo no youtube; Capa para Ebook; Design para Ebook.
                </main>

            </div>

            <img class="logo logo--center" src="/assets/icone.svg" alt="Logo Agência T9" />
            
        </section>
    )
}

export default About;