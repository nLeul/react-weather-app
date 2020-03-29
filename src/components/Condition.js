import React from 'react';

const Condition = (props) => {
    return (
        <>
            <h1 className="temp">{props.temp}</h1>
            <h3 className="condition">{props.condition}</h3>
        </>
    );
}

export default Condition;