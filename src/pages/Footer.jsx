import React from 'react';

import Logo from '../components/Logo';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <nav className="footer__navigation">
                    <a href="/#home" className="footer__link-item">Início</a>
                    <a href="/#sobre" className="footer__link-item">Sobre</a>
                    <a href="/#portfolio" className="footer__link-item">Portfolio</a>
                    <a href="/#servicos" className="footer__link-item">Serviços</a>
                    <a href="/#contato" className="footer__link-item">Contato</a>
                </nav>

                <div className="footer__our-contact">

                    <h3 className="footer__our-contact__title">Nosso contato</h3>
                    <div className="footer__our-contacts">
                        <p className="footer__contact-item">(44) 9 9749-0242</p>
                        <p className="footer__contact-item">agenciat9@agenciat9.com.br</p>
                    </div>

                </div>

                <div className="footer__socials">
                    <h3 className="footer__socials__title">Segue a Gente!</h3>
                    <div className="footer__socials__icons">
                        <a
                            href="https://instagram.com/agenciat9" 
                            target="_blank" 
                            className="footer__socials__icon" 
                            rel="noreferrer"
                        >
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://facebook.com/agenciat9" 
                            target="_blank" 
                            className="footer__socials__icon" 
                            rel="noreferrer"
                        >
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://behance.net/agenciat9" 
                            target="_blank" 
                            className="footer__socials__icon" 
                            rel="noreferrer"
                        >
                            <i class="fab fa-behance"></i>
                        </a>
                    </div>
                </div>
                
                <img class="logo logo--center" src="/assets/agencia-t9.svg" alt="Logo Agência T9" />

            <a style={{margin: '0 auto'}} href="https://github.com/Kelvin-Jesus">Feito com ❤️ por <b>KJ</b></a>
            </div>

            
        </footer>
    );
}

export default Footer;
