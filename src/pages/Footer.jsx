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
                        <p className="footer__contact-item">agenciatrilogia@gmail.com</p>
                    </div>

                </div>

                <div className="footer__socials">
                    <h3 className="footer__socials__title">Segue a Gente!</h3>
                    <div className="footer__socials__icons">
                        <a
                            href="https://instagram.com" 
                            target="_blank" 
                            className="footer__socials__icon" 
                            rel="noreferrer"
                        >
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://facebook.com" 
                            target="_blank" 
                            className="footer__socials__icon" 
                            rel="noreferrer"
                        >
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://twitter.com" 
                            target="_blank" 
                            className="footer__socials__icon" 
                            rel="noreferrer"
                        >
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                
                <Logo />

            </div>
            
        </footer>
    );
}

export default Footer;
