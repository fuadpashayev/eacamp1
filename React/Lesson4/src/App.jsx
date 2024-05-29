import { useState } from "react";
import Navigation from "./navigation";

const App = () => {
  const [route, setRoute] = useState("home");

  return (
    <>
      <button onClick={() => setRoute("home")}>Home</button>
      <button onClick={() => setRoute("about")}>About</button>
      <button onClick={() => setRoute("footer")}>Footer</button>
      <Navigation initialRoute={route} setRoute={setRoute} />
    </>
  );
};

export default App;
