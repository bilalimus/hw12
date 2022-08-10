import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import CartContext from "../../Store/cartContext";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartCtx = useContext(CartContext)

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return <li key={item.id}>{item.name}:{item.price}</li>;
      })}
    </ul>
  );
  
  

  console.log(cartCtx);

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{cartCtx.totalPrice.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onCloseCart}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
