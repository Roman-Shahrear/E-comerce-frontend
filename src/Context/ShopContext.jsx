import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=> {
  let cart = {};
  for(let index= 0; index < all_product.length + 1; index++){
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  
  const [cartItems, setCartItem] = useState(getDefaultCart());
  
  const addToCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      return updatedCart;
    });
  };

  useEffect(() => {
  }, [cartItems]);

  const contextValue = {all_product, cartItems, addToCart, removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
