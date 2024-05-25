import { useState } from "react";
import Navigation from "./navigation";

const App = () => {
  const [route, setRoute] = useState("home");

  return (
    <>
      <button onClick={() => setRoute("home")}>Home</button>
      <button onClick={() => setRoute("about")}>About</button>
      <button onClick={() => setRoute("footer")}>Footer</button>
      <Navigation initialRoute={route} />
    </>
  );
};

/*
Rerender nə zaman baş verir

- prop dəyişdiyi zaman
- state dəyişdiyi zaman
- force rerender zamanı *

*/

export default App;
