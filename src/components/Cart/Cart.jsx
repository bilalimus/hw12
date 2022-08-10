import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import CartContext from "../../Store/cartContext";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div>
        <div className={classes.total}>
          <span>Total Amoung</span>
          <span>44</span>
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
