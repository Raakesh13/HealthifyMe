import { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Dashboard from "/home/rakesh/api projects/healthifyMe using flask/src/Dashboard"
import Cookies from "js-cookie"

class Deleteprofile extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    Axios.delete("http://127.0.0.1:5000/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("Authorization")
      }
    }).then(console.log("user deleted."))
  }

}
export default Deleteprofile;
