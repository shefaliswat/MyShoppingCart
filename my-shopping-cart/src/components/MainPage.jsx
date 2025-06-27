import React, { useEffect, useMemo, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

export const MainPage = () => {
  let initialState = {
    products: [],
    cart: []
  }
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { products, cart } = state || {};

  const getProductList = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    dispatch({
      type: "POPULATE_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    getProductList();
  }, []);

  const isProductInCart = (id) => {
    // if(!cart || cart.length == 0) return false;
    const item = cart?.find((i) => i.id == id);
    if (item) return true;
    return false;
  };

  console.log(products);
  if (!products || products.length === 0) return "No products available.";
  return (
    <div className="product-container">
      {products.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <img className="product-thumbnail" src={product.thumbnail} />
            <p className="product-title">{product.title}</p>
            {isProductInCart(product.id) ? (
              <button
                className="remove-cart-button"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: product })
                }
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="add-cart-button"
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
