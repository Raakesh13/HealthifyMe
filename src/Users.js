import React, { Component } from "react";
import axios from "axios";
// import Table from "reactstrap/Table";
import { Card, CardBody, CardText, Button, CardTitle } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

class AllUsers extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:5000/users").then(res => {
      // users: res.data
      console.log(res);
      const Data = res.data.map((user, i) => (
        <Card key={i}>
          <CardBody>
            <CardTitle>{user[0]}</CardTitle>
            <CardText>
              {user[1]}
              {user[2]}
              {user[3]}
            </CardText>
          </CardBody>
        </Card>
      ));
      this.setState({ users: Data });
    });
  }
  render() {
    return (
      <div>
        {/* <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Calories Per Day</th>
            </tr>
          </thead>
          {this.state.users}
        </Table> */}
        {this.state.users}
      </div>
    );
  }
}

export default AllUsers;
