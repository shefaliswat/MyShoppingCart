import { useEffect, useReducer } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import { MainPage } from "./components/MainPage";
import { productReducer } from "./reducers/productReducer";

function App() {
  let initialState = {
    products: [],
    cart: [],
  };
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


  return (
    <div className="app-container">
      <MainPage products={products} cart={cart} dispatch={dispatch}/>
      <Cart cart={cart} dispatch={dispatch}/>
    </div>
  );
}

export default App;
