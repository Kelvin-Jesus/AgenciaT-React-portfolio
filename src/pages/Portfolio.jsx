import React from "react";
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards'

import PortfolioLink from '../components/PortfolioLink.jsx';
import Logo from "../components/Logo.jsx";
import Title from "../components/Title.jsx";

const imgsPath = 'assets/imgs'

const Portfolio = () => {
    return (
        <section className={`portfolio `} id="portfolio">
            <main className="container">
                
                <Title title="Portfolio" sectionName="portfolio__title" />

                <div className="portfolio__grid">

                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>

                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p1.png`} 
                                imageDescription="Imagem do trabalho realizado para a RideTrip" 
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p1-2.png`} 
                                imageDescription="Imagem do trabalho realizado para a RideTrip" 
                            />
                        </SwiperSlide>
                    
                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p1-3.png`} 
                                imageDescription="Imagem do trabalho realizado para a Ornaghi Consultoria" 
                            />
                        </SwiperSlide>   

                    </Swiper>
                    
                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>

                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p2.png`} 
                                imageDescription="Imagem do trabalho realizado para a RideTrip" 
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p2-2.png`} 
                                imageDescription="Imagem do trabalho realizado para a RideTrip" 
                            />
                        </SwiperSlide>
                    
                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p2-3.png`} 
                                imageDescription="Imagem do trabalho realizado para a Ornaghi Consultoria" 
                            />
                        </SwiperSlide>   

                    </Swiper>

                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>

                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p3.png`} 
                                imageDescription="Imagem do trabalho realizado para a RideTrip" 
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p3-2.png`} 
                                imageDescription="Imagem do trabalho realizado para a RideTrip" 
                            />
                        </SwiperSlide>
                    
                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p3-3.png`} 
                                imageDescription="Imagem do trabalho realizado para a Ornaghi Consultoria" 
                            />
                        </SwiperSlide>   

                    </Swiper>
                    
                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>

                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p4.png`} 
                                imageDescription="Imagem do trabalho realizado para a RideTrip" 
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p4-2.png`} 
                                imageDescription="Imagem do trabalho realizado para a RideTrip" 
                            />
                        </SwiperSlide>
                    
                        <SwiperSlide>
                            <PortfolioLink 
                                postLink="https://behance.net/agenciat9"
                                imgLink={`${imgsPath}/p4-3.png`} 
                                imageDescription="Imagem do trabalho realizado para a Ornaghi Consultoria" 
                            />
                        </SwiperSlide>   

                    </Swiper>
                
                </div>

                <img class="logo logo--center" src="/assets/icone.svg" alt="Logo Agência T9" />

                <svg class="bubble-icon1" width="338" height="287" viewBox="0 0 338 287" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M208.569 45.3067C228.569 -9.49331 302.902 1.8067 337.569 14.3067L337.569 239.307C242.236 272.473 43.7691 320.807 12.5691 248.807C-26.4309 158.807 32.5691 125.807 90.5691 129.307C148.569 132.807 183.569 113.807 208.569 45.3067Z" fill="#3600AA"/>
                    <circle cx="114.5" cy="44.5" r="44.5" fill="#3600AA"/>
                </svg>

            </main>
        </section>
    )
}

export default Portfolio