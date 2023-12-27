import { createContext, useState } from "react";
import PRODUCTS from "../assets/shop-data.json";

export const ProductsContext = createContext({
  availableProducts: null,
  setAvailableProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [availableProducts, setAvailableProducts] = useState(PRODUCTS);
  const value = { availableProducts, setAvailableProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
