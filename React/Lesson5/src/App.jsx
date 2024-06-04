import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  const [weatherData, setWeatherData] = useState("Loading...");
  const fetchTimer = useRef(null);

  const getWeatherData = async () => {
    fetchTimer.current = setTimeout(() => {
      console.log(weatherData);
    }, 750);
  };

  useEffect(() => {
    getWeatherData();
  }, [weatherData]);

  return (
    <>
      <Header setWeatherData={setWeatherData} />
      <Main weatherData={weatherData} />
    </>
  );
};

export default App;
