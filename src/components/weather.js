import React from 'react';
import Location from './Location';
import Icon from './Icon';
import Condition from './Condition';

const WeatherCard = props => {
    return (
        <div className="card">
            <Location city={props.city } country={props.country } />
            <Icon icons="./img/rain-cloudy.png" />
            <Condition condition="Clouds" temp={props.temp}/>
        </div>
    );
}

export default WeatherCard;