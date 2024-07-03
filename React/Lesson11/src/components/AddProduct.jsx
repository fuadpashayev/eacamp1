import React, { useRef } from "react";
import useProductStore from "../stores/productStore";

const AddProduct = () => {
  const { setProducts } = useProductStore();

  const nameRef = useRef();
  const priceRef = useRef();

  const addProduct = () => {
    const title = nameRef.current.value;
    const price = priceRef.current.value;
    setProducts([{ title, price }]);
  };

  return (
    <div>
      <div>
        <input ref={nameRef} placeholder="Product Name" />
      </div>
      <div>
        <input ref={priceRef} placeholder="Product Price" />
      </div>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
};

export default AddProduct;
