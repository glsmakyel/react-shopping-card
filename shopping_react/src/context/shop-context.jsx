import React from 'react'
import { useState, createContext } from 'react';



import { PRODUCTS } from '../products.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const uptadeCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }
  const ContextValue = { cartItems, addToCart, removeFromCart, uptadeCartItemCount, getTotalCartAmount }
  return (
    <ShopContext.Provider value={ContextValue} >{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider;
