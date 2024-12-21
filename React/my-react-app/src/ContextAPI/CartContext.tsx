import { createContext, useContext, useState } from "react";
import { CartContextType, CartItem, Product } from "./types";
import React from "react";

export let CartContext = createContext<CartContextType | undefined>(undefined);

let CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let [cart, setCart] = useState<CartItem[]>([]);

  let addToCart = (p: Product) => {
    /* const cartexist = JSON.parse(localStorage.getItem("cart") || "[]"); */

    setCart((prevCart) => {
      let existingItem = prevCart.find((item) => item.id == p.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id == p.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...p, quantity: 1 }];
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  let removeFromCart = (id: number) => {
    const savedCart: string | null = localStorage.getItem("cart");
    const parsedCart: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
    const updateCart = parsedCart.filter((item) => item.id !== id);
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    //setCart((parsedCart) => parsedCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export let useCart = (): CartContextType => {
  let context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
