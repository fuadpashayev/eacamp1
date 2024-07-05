import React, { memo } from "react";

const Test = ({ products }) => {
  console.log({ productsFromTestComponent: products });
  console.log("test component is rerendered");
  return <div>Test</div>;
};

// HOC - high order components
// HOF - high order functions

export default memo(Test);
