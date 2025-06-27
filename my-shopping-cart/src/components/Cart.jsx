import React from "react";
import { ProductCard } from "./ProductCart";

export const Cart = (props) => {
  const { cart, dispatch } = props;

  if (!cart || cart.length === 0) return <div className="cart-container">Your cart is empty!</div>
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.map((item) => {
        return <ProductCard dispatch={dispatch} product={item} cart={cart} isCart/>
      })}
    </div>
  );
};
