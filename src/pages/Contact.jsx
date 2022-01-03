import React from 'react';

import Form from '../components/Form.jsx';

const Contact = () => {
    return (
        <section className="contact" id="contato">

        <svg className="bubble-icon" width="283" height="338" viewBox="0 0 283 338" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.3067 129C-13.4933 109 -2.1933 34.6667 10.3067 0H235.307C268.473 95.3333 316.807 293.8 244.807 325C154.807 364 121.807 305 125.307 247C128.807 189 109.807 154 41.3067 129Z" fill="#3600AA"/>
            <circle cx="53.3066" cy="186" r="27" fill="#3600AA"/>
            <circle cx="91.3066" cy="224" r="11" fill="#3600AA"/>
        </svg>
 
            <div className="container">

                <Form />

            </div>
        </section>
    );
}

export default Contact;
