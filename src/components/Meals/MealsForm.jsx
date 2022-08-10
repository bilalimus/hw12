import React, { useRef } from "react";
import Input from "../UI/Input";
import classes from "./MealsForm.module.css";

function MealsForm(props) {

   const amountRef = useRef(null)
 

   const submitHandler = (event) =>  {

     event.preventDefault()
     const amount = amountRef.current.value
     const convertAmount = +amount

     console.log(convertAmount)
     props.onAddToCart(convertAmount)
   }



  return (
    <form className={classes.form}>
      <Input ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          defaultValue: "1",
          min: "1",
          max: "5",
          type: "number",
        }}
      />
      <button onClick={submitHandler}> + Add</button>
    </form>
  );
}
export default MealsForm;
