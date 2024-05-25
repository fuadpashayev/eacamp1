import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import styles from "./ProductItem/product.module.css";

const Products = ({ setRoute }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>Product list</div>
      <div className={styles.container}>
        {products.map((product) => (
          <ProductItem item={product} key={product.title} setRoute={setRoute} />
        ))}
      </div>
    </>
  );
};

export default Products;
