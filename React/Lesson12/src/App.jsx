import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Test from "./Test";

Array.prototype.groupBy = function (groupByCB) {
  return Object.groupBy(this, groupByCB);
};

function App() {
  const [products, setProducts] = useState([]);
  const [isActive, setIsactive] = useState([]);
  const [value, setValue] = useState([]);
  const testElementReference = useRef();

  // testElementReference.current.value = "";

  // useCallback - methodlar ucun
  // useMemo - value-lar ucun
  // React.memo

  // const generateData = useCallback(() => {
  //   // [1 milyon data].map().filter()
  //   products; // []
  // }, []);

  // const data = useMemo(() => {
  //   products; // []
  //   return products.map().filter();
  // }, [products]);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const data = await fetch("api/products");
  //     setProducts(data);
  //   }, 5000);
  // }, []);

  // const anaSehifeUcunMehsullar = useMemo(
  //   () => products.filter((product) => product.isForHome === 1),
  //   [products]
  // );
  // const bahaliMehsullar = useMemo(
  //   () => products.filter((product) => product.price > 5000),
  //   [products]
  // );
  // const yeniMehsullar = useMemo(
  //   () => products.filter((product) => product.created_at > Date.now()),
  //   [products]
  // );

  // const changeData = () => {
  //   setProducts([1, 2, 3, Math.random()]);
  // };

  useEffect(() => {
    const users = [
      { name: "Elvin", surname: "Kamilov", age: 22 },
      { name: "Bayram", surname: "Behbudov", age: 23 },
      { name: "Faiq", surname: "Ismayilov", age: 24 },
      { name: "Elvin1", surname: "Kamilov", age: 22 },
      { name: "Elvin2", surname: "Kamilov", age: 22 },
      { name: "Elvin3", surname: "Kamilov", age: 22 },
      { name: "Elvin4", surname: "Kamilov", age: 22 },
      { name: "Faiq", surname: "Ismayilov", age: 24 },
      { name: "Faiq", surname: "Ismayilov", age: 24 },
      { name: "Faiq", surname: "Ismayilov", age: 24 },
      { name: "Faiq", surname: "Ismayilov", age: 24 },
    ];

    const grouppedUsers = users.groupBy("age");
    const grouppedUsers2 = Object.groupBy(users, (user) => user.age);
    console.log(grouppedUsers);
  }, []);

  console.log("app component is rerendered");

  return (
    <>
      <p
        ref={testElementReference}
        className={`box box-circle ${!!isActive && "a"}`}
        // onClick={changeData}
      >
        Click on the Vite and React logos to learn more
      </p>
      {/* <input value={value} onInput={(e) => setValue(e.target.value)} /> */}
      {/* <Test products={products} /> */}
    </>
  );
}

export default App;
