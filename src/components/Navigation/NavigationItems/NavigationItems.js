// @ts-nocheck
import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    {props.isLogged ? (
      <NavigationItem link="/">Burger Builder</NavigationItem>
    ) : null}
    {props.isLogged ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {props.isLogged ? (
      <NavigationItem link="/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/login">Login</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
