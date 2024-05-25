import { useEffect, useState, Component } from "react";
import Navigation from "./navigation";

class AppComponent extends Component {
  // UNSAFE_componentWillMount(){}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  shouldComponentUpdate() {}

  render() {
    return (
      <>
        <button onClick={() => setRoute("home")}>Home</button>
        <button onClick={() => setRoute("about")}>About</button>
        <button onClick={() => setRoute("footer")}>Footer</button>
        <Navigation initialRoute={route} />
      </>
    );
  }
}

let isMounted = false;
const App = () => {
  const [route, setRoute] = useState("home");

  // componentDidMount() -> render bitdikden sonra

  // useEffect(() => {
  //   isMounted = true;
  //   // componentDidMount()
  //   console.log("component is mounted", `route is ${route}`);
  //   setTimeout(() => {
  //     isMounted && setRoute("footer");
  //   }, 2500);
  //   const scrollListener = window.addEventListener("scroll", () => {});

  //   return () => {
  //     isMounted = false;
  //     // cleanup -> componentWillUnmount()
  //     console.log("component will be unmounted", `route is ${route}`);
  //     // window.removeEventListener(scrollListener);
  //   };
  // }, [route]); // componentDidUpdate();

  // console.log(route);

  return (
    <>
      <button onClick={() => setRoute("home")}>Home</button>
      <button onClick={() => setRoute("about")}>About</button>
      <button onClick={() => setRoute("footer")}>Footer</button>
      <Navigation initialRoute={route} setRoute={setRoute} />
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
