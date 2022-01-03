import React from 'react';

import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link className={props.className} to={props.goToPage}>
            <a href={props.goToPage}>
                {props.text}
            </a>
        </Link>
    );
}

export default Button;
