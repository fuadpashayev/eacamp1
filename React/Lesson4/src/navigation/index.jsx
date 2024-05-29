import React, { useState } from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import Footer from "../pages/Footer";

/*
Hook qaydaları:
- hooklar ancaq functional component içində istifadə oluna bilər
- hooklar şərt içində istifadə oluna bilməz
*/

const Navigation = ({ initialRoute, setRoute }) => {
  const pages = {
    home: <Home setRoute={setRoute} />,
    about: <About />,
    footer: <Footer />,
  };

  return <>{pages[initialRoute]}</>;
};

export default Navigation;
