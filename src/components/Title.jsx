import React from 'react';

const Title = (props) => {
    return (
        <h2 className={`title title--underscore ${props?.sectionName ?? ''}`}>
            {props.title}
        </h2>
    );
}

export default Title;
