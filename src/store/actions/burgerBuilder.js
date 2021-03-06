import axios from "../../axios-orders";
import * as actionTypes from "./actionTypes";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};
export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = (token) => {
  return (dispatch) => {
    axios
      .get(
        "https://broject-burger-default-rtdb.firebaseio.com/ingredients.json?auth=" +
          token
      )
      .then((response) => {
        dispatch(setIngredients(response.data));
        // this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
