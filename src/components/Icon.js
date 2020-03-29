import React from 'react';

const Icon = (props) => {
    return (
        <img className="icon" src={props.icons} alt="weather icon" />
    );
}

export default Icon;