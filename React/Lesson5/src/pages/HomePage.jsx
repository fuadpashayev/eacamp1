import React, { useRef } from "react";
import Layout from "../Layout/Layout";

const HomePage = () => {
  const inputRef = useRef();
  const changeInput = () => {
    console.log(inputRef.current.value);
  };

  return (
    <Layout>
      <div>
        Home page
        <input ref={inputRef} />
        <button onClick={changeInput}>Click</button>
      </div>
    </Layout>
  );
};

export default HomePage;
