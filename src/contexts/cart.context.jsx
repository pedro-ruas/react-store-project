import { createContext, useState } from "react";

export const CartContext = createContext({
  productsInCart: new Map(),
  addProductToCart: (product) => null,
  removeProductFromCart: (product, removeAll) => null,
  clearCart: () => null,
  showCartDrawer: false,
  setShowCartDrawer: () => null,
  cartItemsCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState(new Map());
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  const addProductToCart = (product) => {
    const newProduct = productsInCart.get(product.id) ?? {
      ...product,
      quantity: 0,
    };

    const newProductsInCart = new Map(productsInCart);
    newProductsInCart.set(product.id, {
      ...newProduct,
      quantity: newProduct.quantity + 1,
    });

    setProductsInCart(newProductsInCart);
  };

  const removeProductFromCart = (product, removeAll = false) => {
    const newProduct = productsInCart.get(product.id);
    const newQuantity = newProduct.quantity - 1;
    const newProductsInCart = new Map(productsInCart);

    if (removeAll || newQuantity <= 0) {
      newProductsInCart.delete(product.id);
    } else {
      newProductsInCart.set(product.id, {
        ...newProduct,
        quantity: newQuantity,
      });
    }

    setProductsInCart(newProductsInCart);
  };

  const clearCart = () => {
    setProductsInCart(new Map());
  };

  const [cartItemsCount, cartTotal] = Array.from(
    productsInCart.values()
  ).reduce(
    (prev, curr) => [
      prev[0] + curr.quantity,
      prev[1] + curr.price * curr.quantity,
    ],
    [0, 0]
  );

  const value = {
    productsInCart,
    addProductToCart,
    removeProductFromCart,
    clearCart,
    showCartDrawer,
    setShowCartDrawer,
    cartItemsCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
