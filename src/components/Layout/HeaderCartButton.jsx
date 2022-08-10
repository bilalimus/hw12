import React, { useContext } from "react";
import CartContext from "../../Store/cartContext";
import CartIcon from "../Icons/CartIcon";
import classes from "./HeaderCartButton.module.css";



function HeaderCartButton(props) {
  
  const cartCtx = useContext(CartContext)

 
  const numberOfCartItems = cartCtx.totalAmount

  return (
    <button onClick={props.onShowCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
