import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Shopping Cart with Redux Toolkit</h1>
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
