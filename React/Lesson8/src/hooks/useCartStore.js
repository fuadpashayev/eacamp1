import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default () => {
  const store = useContext(CartContext);

  return store;
};
