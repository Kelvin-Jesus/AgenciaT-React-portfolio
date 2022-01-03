import React from 'react';

import logo from '../logo.svg';
import Header from './Header.jsx'
import Presentation from './Presentation.jsx'
import About from './About.jsx';
import Portfolio from './Portfolio.jsx'
import Services from './Services.jsx'
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Presentation logo={logo}/>
                <About />
                <Portfolio />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default Home;
