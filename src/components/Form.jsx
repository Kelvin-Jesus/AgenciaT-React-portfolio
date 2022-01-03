import React from 'react';

const Form = () => {
    return (
        <form className="form">
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
                </div>
            </div>

            <div className="form__2column">
                <div className="form__input-group"></div>
                <label className="form__input-label" htmlFor="msg">Mensagem</label>
                <textarea className="form__input" name="msg" id="msg" ></textarea>
            </div>

        </form>
    );
}

export default Form;
