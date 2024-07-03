import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div>
      <img src={item.image} width={50} />
      <div>Name: {item.title}</div>
      <div>Price: {item.price}</div>
    </div>
  );
};

export default ProductItem;
