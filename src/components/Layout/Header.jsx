import React from "react";
import mealsImage from "../../assets/20483612.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food" />
      </div>
    </>
  );
}

export default Header;
