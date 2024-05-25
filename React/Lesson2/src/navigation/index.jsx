import React, { useState } from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import Footer from "../pages/Footer";

const pages = {
  home: <Home />,
  about: <About />,
  footer: <Footer />,
};

/*
Hook qaydaları:
- hooklar ancaq functional component içində istifadə oluna bilər
- hooklar şərt içində istifadə oluna bilməz
*/

const Navigation = ({ initialRoute }) => {
  // const [route, setRoute] = useState(initialRoute); // hook - "a" isə onun başlanğıc dəyəri
  // data[0] // value
  // data[1]('new value') // setter

  console.log(initialRoute);

  return (
    <>
      {/* <button onClick={() => setRoute("home")}>Home</button>
      <button onClick={() => setRoute("about")}>About</button> */}
      {pages[initialRoute]}
    </>
  );
};

export default Navigation;
