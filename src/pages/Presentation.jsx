import React from "react";

const imgsPath = 'assets/imgs'

const Presentation = (props) => {
    return (
        <section className="presentation container">
            <div className="presentation__column1">
                <h1 className="title">
                    Olá,<br/> 
                    somos a <br/>
                    <span className="primary-color-text">Agencia T9</span>!
                </h1>
                <h3>Seja Bem-Vindo!</h3>
            </div>
            <div className="presentation__column2">
                <img src={`${imgsPath}/Foto.png`} className="presentation__img-item" alt="Pessoas trabalhando na agência" />
            </div>

            <div className="presentation__column3">
                <img src={props.logo} alt="logo" />
            </div>
            
        </section>
    )
}

export default Presentation;