import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  {
    label: "Salad",
    type: "Salad",
  },
  {
    label: "Bacon",
    type: "Bacon",
  },
  {
    label: "Cheese",
    type: "Cheese",
  },
  {
    label: "Meat",
    type: "Meat",
  },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current price: <strong>{props.price.toFixed(2)}$</strong>
    </p>
    {controls.map((el) => (
      <BuildControl
        key={el.label}
        label={el.label}
        added={() => props.ingredientAdded(el.type)}
        removed={() => props.ingredientRemoved(el.type)}
        disabled={props.disabled[el.type]}
        isPerchasable={props.isPerchasable}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={props.perchasable}
      onClick={props.checkout}
    >
      ORDER NOW
    </button>
  </div>
);
export default buildControls;
