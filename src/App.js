import React from 'react';
import './App.css';
import WeatherCard from './components/weather';


const App = () => {
  // const city = 'london';

  // const country = 'uk';

  // const APPID = 'b93aec3cb64ff501cac71c58001a9518';//API Key
  // api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
  // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b93aec3cb64ff501cac71c58001a9518
  // fetch(`api.openweathermap.org/data/2.5/weather?q=${city},${country}& ${APPID}`)
  const data = async () => {
    const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b93aec3cb64ff501cac71c58001a9518`);
    const resJSON = await apiRes.json();
    return resJSON;
  };
  console.log(data());
  return (
    <div className="App">
      <WeatherCard temp="35" condition="Rain" city="Newyork" country="US" />
      <WeatherCard temp="40" condition="Rain" city="paris" country="Fr" />
    </div>
  );
}

export default App;
