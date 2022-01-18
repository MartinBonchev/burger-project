import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
const sideDrawer = (props) => {
  const sideDrawerAction = [
    classes.SideDrawer,
    props.open ? classes.Open : classes.Close,
  ];

  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={sideDrawerAction.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isLogged={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};
export default sideDrawer;
