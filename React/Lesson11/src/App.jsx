import AddProduct from "./components/AddProduct";
import ProductItem from "./components/ProductItem";
import useProductStore from "./stores/productStore";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { products, getProductsFromApi } = useProductStore();

  console.log(products);

  useEffect(() => {
    getProductsFromApi();
  }, []);

  return (
    <>
      <AddProduct />
      <h4>Products</h4>
      <div>
        {products.map((product, index) => (
          <ProductItem item={product} key={product.title + index} />
        ))}
      </div>
    </>
  );
}

export default App;
