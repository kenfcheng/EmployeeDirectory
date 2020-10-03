import React, { Component } from "react";
// import { userContext } from "../Utils/userContext";
// import { API } from "../Utils/Api";
// import Button from "../Components/Button";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employees: [],
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20&nat=us").then((result) => {
      this.setState({
        isLoaded: true,
        employees: result.employees,
      });
    });
  }

  renderTableData() {
    return this.state.employees.map((employees, data) => {
      const { id, name, email, username } = employees;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Employee Table</h1>
        <table id="employees">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
