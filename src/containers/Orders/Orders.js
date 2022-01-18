import React, { Component } from "react";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
class Orders extends Component {
  componentWillMount(props) {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    return (
      <div>
        {!this.props.loading ? (
          this.props.orders.map((el) => {
            return (
              <Order
                key={el.id}
                ingredients={el.ingredients}
                price={el.price}
                customer={el.orderData}
                deliveryDuration={el.duration}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.order.orders,
  loading: state.order.loading,
  token: state.auth.token,
  userId: state.auth.userId,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOrders: (token, userId) =>
    dispatch(actions.fetchedOrders(token, userId)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
