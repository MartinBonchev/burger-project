import React from "react";
// @ts-ignore
import classes from "./BurgerIngredient.css";

const burgerIngredient = (props) => {
  const breadTop = () => {
    return (
      <div className={classes.BreadTop}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
    );
  };
  const getOtherIngredients = (ingredient) => {
    return <div className={classes[ingredient]}></div>;
  };

  const getIngredients = (type) => {
    return type === "BreadTop" ? breadTop() : getOtherIngredients(type);
  };

  return getIngredients(props.type);
};
export default burgerIngredient;
