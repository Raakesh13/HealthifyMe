import React, { Component } from "react";
import Axios from "axios";
// import Link, { Redirect } from "react-router-dom";
import Deleteprofile from "./Deleteprofile";
import Cookies from "js-cookie"

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      username: "",
      calories_per_day: ""
    };
  }
  componentDidMount() {
    Axios.get("http://127.0.0.1:5000/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("Authorization")
          // "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTA2NTAzNDYsIm5iZiI6MTU5MDY1MDM0NiwianRpIjoiZjc2NmY5YTgtYmNmMy00ZGJiLTgxODgtYTEwOTJjMDFkNjMxIiwiZXhwIjoxNTkzMjQyMzQ2LCJpZGVudGl0eSI6IlJhamVzaCIsInR5cGUiOiJyZWZyZXNoIn0.MsRSDbH-7vVqR2_tWo1tRclAMXEF71Ik6mlZbgE2GIQ"
      }
    }).then(res => {
      this.setState({
        name: res.data.name,
        email: res.data.email,
        username: res.data.username,
        calories_per_day: res.data.calories_per_day
      });
      console.log(this.state);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    return <Deleteprofile />;
  }

  render() {
    return (
      <div style={{ color: "black" }}>
        <p>
          Username
          <br />
          {this.state.username}
          <br />
        </p>
        <p>
          Name
          <br />
          {this.state.name}
          <br />
        </p>
        <p>
          Email address
          <br />
          {this.state.email}
          <br />
        </p>

        <p>
          Calories per day
          <br />
          {this.state.calories_per_day}
        </p>
        <button onSubmit={this.handleSubmit}>Delete</button>
      </div>
    );
  }
}
export default Profile;
