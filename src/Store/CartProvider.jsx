import React, { useReducer } from "react";
import CartContext from "./cartContext";

const cartReducer = (state, action) => {
  const filteredItems = state.items.filter((el) => el.id !== action.food.id)
  switch (action.type) {
    case "ADD_FOOD":
      return {
        items: [...filteredItems, action.food],
        totalAmount: state.totalAmount + action.food.totalAmount,
        totalPrice: state.totalPrice + action.food.price,
      };
    case "DELETE_FOOD":
      return {
        items: state.filter((el) => {
          return el.id !== action.id;
        }),
      };
    case "CLEAR_FOOD":
      return { type: [], totalAmount: 0 };
      
     return state;
  }


};

function CartProvider(props) {
  const [stateOrderFood, dispatchOrderFood] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const addItem = (item) => {
    dispatchOrderFood({ type: "ADD_FOOD", food: item });
    console.log(item, 'приходит для добваления');
  };
  const removeItems = (id) => {
    dispatchOrderFood({ type: "DELETE_FOOD", id: id });
  };
  const clearCart = () => {
    dispatchOrderFood({ type: "CLEAR_FOOD" });
  };

  const cartContext = {
    items: stateOrderFood.items,
    totalAmount: stateOrderFood.totalAmount,
    totalPrice: stateOrderFood.totalPrice,
    addItem: addItem,
    removeItem: removeItems,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
