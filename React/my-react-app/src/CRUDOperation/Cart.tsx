import React from "react";
import { useCart } from "../ContextAPI/CartContext";
import { CartItem } from "../ContextAPI/types";

const Cart = () => {
  let { cart, removeFromCart } = useCart();

  const saveCart = localStorage.getItem("cart");

  const PrevCart: CartItem[] = saveCart ? JSON.parse(saveCart) : [];

  return (
    <div>
      <h1>Your Cart</h1>
      {PrevCart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {PrevCart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price * product.quantity}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
