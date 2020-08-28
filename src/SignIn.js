import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import Nav from "./naviagator";
// import Image from "./images/image1.jpg";
import "./styles.css";
import Axios from "axios";
import Cookies from "js-cookie";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      isLogedin: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    Axios.post(
      "http://127.0.0.1:5000/login",
      JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    ).then((res) => {
      if (res.data.refresh_token) {
        Cookies.set("Authorization", `Bearer ${res.data.refresh_token}`);
        // console.log(Cookies.get("Authorization"));
        this.setState({
          isLogedin: Cookies.get("Authorization"),
        });
      }
    });
  }

  render() {
    console.log(this.state.isLogedin);
    if (this.state.isLogedin) {
      return <Redirect to="/" />;
    }
    return (
      <div className="SignIn">
        <form className="SignInForm" onSubmit={this.handleSubmit}>
          {/* <div width="20%"> */}
          <div className="signin-label">Sign In</div>
          <InputGroup className="signin-input-group">
            <label for="username">Username</label>
            <br />
            <InputGroup>
              <Input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Username"
              />
            </InputGroup>

            <br />
            <br />
            <label for="password">Password</label>
            <br />
            <InputGroup>
              <Input
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </InputGroup>
            <br />
            <br />
            <InputGroup className="signin-button">
              <Button>Signin</Button>
            </InputGroup>
          </InputGroup>
          {/* </div> */}
        </form>
      </div>
    );
  }
}

export default SignInForm;
