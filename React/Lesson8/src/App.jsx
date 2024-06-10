import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import CartContext from "./contexts/CartContext";

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider value={{ total, setTotal, items, setItems }}>
      <Header />
      <Products />
    </CartContext.Provider>
  );
}

export default App;
