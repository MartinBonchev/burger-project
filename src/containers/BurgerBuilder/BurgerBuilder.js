import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

export class BurgerBuilder extends Component {
  state = {
    durationTime: 0,
    purchasing: false,
  };
  componentDidMount() {
    this.props.onInitIngredients(this.props.token);
  }
  updatePerchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return sum > 0;
  }

  checkoutNow = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };
  deliveryDurationCalculator = (ingredients) => {
    let totalIngredients = null;
    let duration = 0;
    totalIngredients = Object.values(ingredients).reduce((acc, curr) => {
      acc += Number(curr);
      return acc;
    }, 0);
    if (totalIngredients >= 1) duration = 15;
    if (totalIngredients >= 4) duration = 20;
    if (totalIngredients >= 6) duration = 30;
    if (totalIngredients >= 10) duration = 60;
    return duration;
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("checkout");
  };
  render() {
    const disabledInfo = {
      ...this.props.ingredients,
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.props.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />

          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.totalPrice}
            perchasable={!this.updatePerchaseState(this.props.ingredients)}
            checkout={this.checkoutNow}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          price={this.props.totalPrice}
          durationTime={this.deliveryDurationCalculator(this.props.ingredients)}
          closeModal={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    token: state.auth.token,
    path: state.auth.authRedirectPath,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: (token) => dispatch(actions.initIngredients(token)),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirect: (path) => dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
