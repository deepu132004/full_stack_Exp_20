import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const products = [
  { id: 1, name: "T-Shirt", price: 499 },
  { id: 2, name: "Sneakers", price: 2499 },
  { id: 3, name: "Smartwatch", price: 3999 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ₹{p.price}{" "}
            <button onClick={() => dispatch(addItem(p))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
