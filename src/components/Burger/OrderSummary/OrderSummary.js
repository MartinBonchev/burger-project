// @ts-nocheck
import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import classes from "./OrderSummary.css";
import Button from "../../UI/Button/Button";
const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(
    (ingredientKey) => {
      return (
        <li key={ingredientKey}>
          {ingredientKey}: {props.ingredients[ingredientKey]}
        </li>
      );
    }
  );
  return (
    <Aux>
      <div className={classes.TitleBox}>
        <h3 className={classes.Title}>Your Order</h3>
        <button className={classes.Close} onClick={props.closeModal}>
          X
        </button>
      </div>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}$</strong>
      </p>
      <p>
        Cooking + Delivery duration{" "}
        <strong>{props.durationTime} minutes!</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};
export default orderSummary;
