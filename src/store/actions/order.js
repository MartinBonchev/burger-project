import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};
export const fetchedOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FECTHED_ORDERS_SUCCESS,
    orders: orders,
  };
};
export const fetchedOrdersFail = (error) => {
  return {
    type: actionTypes.FECTHED_ORDERS_FAIL,
    error: error,
  };
};
export const fetchedOrdersStart = () => {
  return {
    type: actionTypes.FECTHED_ORDERS_START,
  };
};
export const fetchedOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchedOrdersStart());

    axios
      .get("/orders.json", {
        params: {
          auth: token,
          orderBy: '"userId"',
          equalTo: `"${userId}"`,
        },
      })
      .then((res) => {
        let fetchedOrders = [];

        for (const key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: [key] });
        }
        dispatch(fetchedOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchedOrdersFail(err));
      });
  };
};
