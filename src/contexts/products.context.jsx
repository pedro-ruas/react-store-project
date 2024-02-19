import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";

export const ProductsContext = createContext({
  availableCategories: {},
  setAvailableCategories: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [availableCategories, setAvailableCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments();
      setAvailableCategories(categories);
    };

    getCategories();
  }, []);

  const value = { availableCategories, setAvailableCategories };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
