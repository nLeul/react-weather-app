import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/weather';


const App = () => {

  const [city, setCity] = useState('london,gb');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [condition, setCondition] = useState('');
  // setCity()
  //  const city = 'london';

  // const country = 'uk';

  // const APPID = 'b93aec3cb64ff501cac71c58001a9518';//API Key
  // api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
  // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b93aec3cb64ff501cac71c58001a9518
  // fetch(`api.openweathermap.org/data/2.5/weather?q=${city},${country}& ${APPID}`)
  const data = async () => {
    const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b93aec3cb64ff501cac71c58001a9518&units=imperial`);
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const searchHandler = (e) => {
    e.preventDefault();
    data().then(res =>{
      console.log(res.name);
      console.log(res.sys.country);
      console.log(res.main.feels_like);
      console.log(res.weather[0].main);
      setCountry(res.sys.country);
      setTemp(res.main.feels_like);
      setCondition(res.weather[0].main);
      setCondition(res.name);

    });
  };

  return (
    <div className="App">
      <WeatherCard
        temp={temp}
        condition={condition}
        city={city}
        country={country}
      />

      <form action="">
        <input value={city} onChange={(e) => { setCity(e.target.value) }}></input>
        <button onClick={e=>searchHandler(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
