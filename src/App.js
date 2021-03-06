import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/weather';


const App = () => {
  const [query, setQuery] = useState('Addis Ababa,ET');
  /**
   const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [condition, setCondition] = useState(''); 
   */
  // shorter form below

  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });


  const data = async q => {
    const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=b93aec3cb64ff501cac71c58001a9518&units=imperial`);
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const searchHandler = (e) => {
    e.preventDefault();
    data(query).then(res => {
      console.log(res.name);
      console.log(res.sys.country);
      console.log(res.main.feels_like);
      console.log(res.weather[0].main);
      /**     
      setCountry(res.sys.country);
      setTemp(res.main.feels_like);
      setCondition(res.weather[0].main);
      setCity(res.name);
       */

      // shorter form below

      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country
      });


    });
  };

  useEffect(() => {
    data(query).then(res => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country
      });

    });

  }, []);


  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />

      <form action="">
        <input value={query} onChange={(e) => { setQuery(e.target.value) }}></input>
        <button onClick={e => searchHandler(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
