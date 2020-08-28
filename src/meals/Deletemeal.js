import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie"

class Deletemeal extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  setRedirect = () => {
    this.setState({ redirect: true });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/meals" />;
    }
  };
  componentDidMount() {
    const { handle } = this.props.match.params;
    Axios.delete(`http://127.0.0.1:5000/meal/${handle}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("Authorization")
          // "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTA2NTAzNDYsIm5iZiI6MTU5MDY1MDM0NiwianRpIjoiZjc2NmY5YTgtYmNmMy00ZGJiLTgxODgtYTEwOTJjMDFkNjMxIiwiZXhwIjoxNTkzMjQyMzQ2LCJpZGVudGl0eSI6IlJhamVzaCIsInR5cGUiOiJyZWZyZXNoIn0.MsRSDbH-7vVqR2_tWo1tRclAMXEF71Ik6mlZbgE2GIQ"
      }
    }).then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <Redirect to="/meals" />
      </div>
    );
  }
}

export default Deletemeal;
