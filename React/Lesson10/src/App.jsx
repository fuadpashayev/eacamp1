import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sayiArtir, sayiAzalt } from "./stores/counterSlice";

const App = () => {
  const dispatch = useDispatch();

  // indexJsdekiReducer.counter.value = counterSlicedaki.initialState.value;
  const count = useSelector((state) => state.counter.value);

  const increase = () => {
    dispatch(sayiArtir());
  };
  const decrease = () => {
    dispatch(sayiAzalt());
  };

  const getAllProducts = () => {
    // ... get all products
    const products = fetch();
    dispatch(setProducts(products));
  };

  console.log({ count });
  return (
    <div>
      Count is {count} <br />
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  );
};

export default App;
