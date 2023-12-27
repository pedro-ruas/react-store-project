import { createContext, useState } from "react";

export const CartContext = createContext({
  productsInCart: new Map(),
  setProductsInCart: () => null,
  showCartDrawer: false,
  setShowCartDrawer: () => null,
});

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState(new Map());
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const value = {
    productsInCart,
    setProductsInCart,
    showCartDrawer,
    setShowCartDrawer,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
