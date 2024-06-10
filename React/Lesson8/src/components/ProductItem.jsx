import React from "react";
import useCartStore from "../hooks/useCartStore";

const ProductItem = ({ product }) => {
  const { setItems, setTotal, items } = useCartStore();

  const addToCart = () => {
    setItems((prev) => [...prev, product]);
    setTotal((prev) => prev + product.price);
  };

  return (
    <div key={product.id}>
      <img src={product.image} alt={product.title} style={{ width: 100 }} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>

      <button onClick={addToCart}>Sebete elave et</button>
    </div>
  );
};

export default ProductItem;
