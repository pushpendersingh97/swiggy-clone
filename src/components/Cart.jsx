import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../utils/cartSlice";
import { ItemList } from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  
  const onClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);

  if (cartItems.length === 0) {
    return <div className="p-4 text-center font-semibold">No record Found</div>;
  }

  return (
    <div className="p-mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <div className="flex justify-center items-center">
        <h1 className="text-center font-semibold">Cart</h1>
        <button className="p-2 text-white bg-black rounded-lg ml-4" onClick={onClearCart}>
          Clear
        </button>
      </div>

      <div>
        {cartItems.map((cartItem) => {
          return <ItemList item={cartItem} key={cartItem.card?.info?.name} fromCart={true} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
