import React from "react";
import useCartStore from "../hooks/useCartStore";

const Header = () => {
  const { total, items } = useCartStore();
  return (
    <div>
      <div>
        <div style={{ position: "fixed", top: 10, right: 10 }}>
          Sebet ({items.length} mehsul - {total.toFixed(2)} AZN)
        </div>
      </div>
    </div>
  );
};

export default Header;
