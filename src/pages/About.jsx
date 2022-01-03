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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor deleniti dolorum illo assumenda, debitis totam, vitae quo eligendi blanditiis vero quod fuga voluptates necessitatibus saepe tempora quaerat, doloribus voluptatem.
                    Libero nemo reiciendis omnis explicabo ducimus, adipisci blanditiis minima, sapiente neque, totam vel culpa at repellat! Modi architecto delectus, exercitationem laborum, ducimus animi ex corporis, veritatis quos similique quaerat commodi.
                    Vitae doloremque aliquam nobis placeat perspiciatis ab cumque rem minus enim, fuga, rerum molestias ratione dicta magnam numquam asperiores odio excepturi. Cumque sit, vitae fuga at accusamus quia aspernatur ipsa.
                </main>

            </div>

            <svg className="bubble-icon2" width="89" height="164" viewBox="0 0 89 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="62.5" cy="26.5" r="26.5" fill="#3600AA"/>
                <circle cx="44.5" cy="119.5" r="44.5" fill="#3600AA"/>
            </svg>

            <Logo />
            
        </section>
    )
}

export default About;