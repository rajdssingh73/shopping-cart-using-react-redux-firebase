import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
const CartItems = () => {
  const CartItems = useSelector(state => state.cart.itemsList)


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
     
      <ul>
        {CartItems.map(item=>(
        
          <li key= {item.id}>  {" "}
             <CartItem  id={item.id}
                quantity = {item.quantity}
                price ={item.price} 
                total = {item.totalPrice}
                name={item.name}
              />{" "}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
