import React from 'react';

import Button from './Button.jsx';

const Form = () => {

    return (
        <form className="form" action="/mail.php" method="post">
            <div className="form__1column">
                <div className="form__input-group">
                    <label className="form__input-label" htmlFor="name">Nome</label>
                    <input 
                        className="form__input"
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Carlos Eduardos" 
                    />
                    <span style={{'fontSize': '14px'}}></span>
                </div>
                <div className="form__input-group">
                    <label className="form__input-label" htmlFor="email">Email</label>
                    <input 
                        className="form__input"
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="seuemail@emai.com" 
                    />
                    <span style={{'fontSize': '14px'}}></span>
                </div>
                <div className="form__input-group">
                    <label className="form__input-label" htmlFor="telefone">Telefone</label>
                    <input 
                        className="form__input"
                        type="text" 
                        name="telefone" 
                        id="telefone" 
                        placeholder="(xx) xxxxx-xxxx" 
                    />
                    <span style={{'fontSize': '14px'}}></span>
                </div>
            </div>

            <div className="form__2column">
                <div className="form__input-group"></div>
                <label className="form__input-label" htmlFor="msg">Mensagem</label>
                <textarea 
                    className="form__input" 
                    name="msg" 
                    id="msg" 
                ></textarea>
                <span style={{'fontSize': '14px'}}></span>
                <br/>
                <button 
                    type="submit"
                    className="service-card__btn"
                >Enviar</button>
            </div>

        </form>
    );
}

export default Form;
