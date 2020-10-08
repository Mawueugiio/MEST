import React from 'react';
import umbrella from './images/umbrella.jpg';


function WeatherHome() {
  
  return (
    <>
    <div  styles={{backgroundImage: `url(${umbrella})` }}><h1> WEATHER APP</h1>
      <h3>Welcome to the Weather App Page!
    </h3> You are advised to login to have a better experience.
    </div>
    </>
  );
}
export default WeatherHome;