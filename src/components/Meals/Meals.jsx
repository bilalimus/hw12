import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsForm from "./MealsForm";
import { MealsSummary } from "./MealsSummary";

function Meals() {
  return (
    <main>
      <MealsSummary />
      <AvailableMeals />
   </main>
  );
}

export default Meals;
