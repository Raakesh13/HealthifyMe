import React, { Component } from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";
// import SignUpForm from "./SignUp";
// import SignInForm from "./SignIn";
// import AllUsers from "./Users";
// import Image from "./images/image1.jpg";

// import "./App.css";

class Nav extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App__Form">
          <div className="PageSwitcher"></div>

          <div className="FormTitle">
            <NavLink
              to="/sign-in"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </Router>
    );
  }
}

export default Nav;
