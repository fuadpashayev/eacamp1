import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const productId = window.location.hash.replace("#", "");
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return <div>product details sehifesindesiniz....</div>;
};

export default ProductDetail;
