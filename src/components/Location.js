import React from 'react';

const Location = (props) => {
    return (
        <div className="location">
            <h1 className="city">{props.city}</h1>
            <h3 className="country">{props.country}</h3>
        </div>
    );
}

export default Location;