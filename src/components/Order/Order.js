import React from "react";
import classes from "./Order.css";

const order = (props) => {
  const ingredients = [];
  for (const ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((el) => {
    return (
      <span
        key={el.name}
        style={{
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {el.name} ({el.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <h4>{props.customer.name}</h4>
      <p>
        Adress: {props.customer.street},{props.customer.zipCode},
        {props.customer.country}
      </p>
      <p>Ingredients:{ingredientOutput}</p>
      {props.customer.freeDrink ? (
        <p>
          Your free drink: <strong>{props.customer.freeDrink}</strong>
        </p>
      ) : (
        <p>No free drink ordered!</p>
      )}
      <p>
        Price: <strong>{props.price.toFixed(2)}$</strong>
      </p>
    </div>
  );
};

export default order;
