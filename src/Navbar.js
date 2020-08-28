import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Button,
} from "reactstrap";
// import {Nav} from "reactstrap/Nav";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import "./styles.css";

class Navigationbar extends Component {
  constructor() {
    super();
  }

  Greetings() {
    if (Cookies.get("Authorization")) {
      console.log(Cookies.get("Authorization"));
      return (
        <Nav className="nav" navbar>
          <NavLink to="/logout">
            <Button className="float-right" outline color="primary">
              Logout
            </Button>
          </NavLink>
          <NavLink to="/profile">
            <Button className="float-right" outline color="primary">
              Profile
            </Button>
          </NavLink>
          <NavLink to="/about">
            <Button className="float-right" outline color="primary">
              About
            </Button>
          </NavLink>
        </Nav>
      );
    } else {
      return (
        <Nav className="nav" navbar>
          <NavLink to="/signin">
            <Button className="float-right" outline color="primary">
              Sign in
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button className="float-right" outline color="primary">
              Sign Up
            </Button>
          </NavLink>
        </Nav>
      );
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="xl" color="dark" variant="dark">
        <NavbarBrand href="/">HealthifyMe</NavbarBrand>
        <NavbarToggler aria-controls="responsive-navbar-nav" />
        <Collapse id="responsive-navbar-nav"></Collapse>
        <this.Greetings />
      </Navbar>
    );
  }
}

export default Navigationbar;
