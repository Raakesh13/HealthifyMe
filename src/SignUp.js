import React, { Component } from "react";
import Axios from "axios";
import Nav from "./naviagator";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";
import "./styles.css"

class SignUpForm extends Component {
  state = {
      email: "",
      password: "",
      username: "",
      first_name: "",
      last_name: "",
      calorie_per_day: ""
    };

  handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(
      "http://127.0.0.1:5000/users",
      JSON.stringify({
        username: this.state.username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        calories_per_day: this.state.calorie_per_day,
        password: this.state.password
      })
    ).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="SignIn">
        <form  className="SignInForm"
        onSubmit={this.handleSubmit}>
          <InputGroup size="20%">
          <InputGroup>
            <Input
              type="text"
              id="username"
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            </InputGroup>
            <br />
            <br />
            <InputGroup>
            <Input
              type="text"
              id="frist_name"
              placeholder="Enter your first name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
            </InputGroup>
            <br />
            <br />
            <InputGroup>
            <Input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
            </InputGroup>
            <br />
            <br />
          
            <InputGroup>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            </InputGroup>
            <br />
            <br />
          <InputGroup>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            </InputGroup>
            <br />
            <br />
            <InputGroup>
            <Input
              type="number"
              id="calorie_per_day"
              placeholder="Enter Calories per day"
              name="calorie_per_day"
              value={this.state.calorie_per_day}
              onChange={this.handleChange}
            />
            </InputGroup>
            <br />
            <br />
          <InputGroup>
            <Button>Signup</Button>
          </InputGroup>
          
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
