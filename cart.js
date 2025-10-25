import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity, clearCart } from "../features/cart/cartSlice";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, e) => {
    const qty = parseInt(e.target.value);
    if (qty > 0) dispatch(updateQuantity({ id, quantity: qty }));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - ₹{item.price} x{" "}
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e)}
                min="1"
              />{" "}
              = ₹{item.price * item.quantity}
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && <button onClick={() => dispatch(clearCart())}>Clear Cart</button>}
    </div>
  );
}
