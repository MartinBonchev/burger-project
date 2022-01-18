import React, { Component } from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosed = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar
          drawerToggleClicked={this.sideDrawerClosed}
          isAuth={this.props.token}
        />
        <SideDrawer
          closed={this.sideDrawerClosed}
          open={this.state.showSideDrawer}
          isAuth={this.props.token}
        />
        {/* SideDrawe, Backdrop */}

        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(Layout);
