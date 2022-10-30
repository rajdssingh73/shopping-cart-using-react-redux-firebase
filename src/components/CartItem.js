import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  // const removeHandler = () => {
  //   dispatch(cartActions.removeFromCart(id));
  // };

  // const addHandler = () => {
  //   dispatch(
  //     cartActions.addToCart({
  //       id,
  //       name,
  //       quantity,
  //       price,
  //     })
  //   );
  // };

  function incrementCartItem () {
    dispatch(
          cartActions.addToCart({
            id,
            name,
            price,
            quantity
          })
        );
  }
  function decrementCartItem (){
    dispatch(cartActions.removeFromCart(id));
  }
  return (
    <>
    <div className="cartItem">
    
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
    </div></>
  );
};

export default CartItem;
