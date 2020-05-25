import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

class AllUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:5000/users").then(res => {
      // users: res.data
      console.log(res);
      const Data = res.data.map((user, i) => (
        // <Container fluid>
        //   <Row>
        //     <Col>
        //       {user[0]} {user[1]} {user[2]}
        //     </Col>
        //   </Row>
        // </Container>
        // <Table bordered hover>
        <tbody>
          <tr>
            <td>{user[0]}</td>
            <td>{user[1]}</td>
            <td>{user[2]}</td>
          </tr>
        </tbody>
        // {/* </Table> */}
      ));
      this.setState({ users: Data });
    });
  }
  render() {
    return (
      <div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Calories Per Day</th>
            </tr>
          </thead>
          {this.state.users}
        </Table>
        HEllo
      </div>
    );
  }
}

export default AllUsers;
