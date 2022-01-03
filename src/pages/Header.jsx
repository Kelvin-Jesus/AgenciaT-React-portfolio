import React from 'react';

const Header = () => {

    return (
        <header className="header container" id="home">
            <nav className="header__navigation">
                <a href="#home" className="header__link-item">Início</a>
                <a href="#sobre" className="header__link-item">Sobre</a>
                <a href="#portfolio" className="header__link-item">Portfolio</a>
                <a href="#servicos" className="header__link-item">Serviços</a>
                <a href="#contato" className="header__link-item">Contato</a>
            </nav>
        </header>
    )
}

export default Header;