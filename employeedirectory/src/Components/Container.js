import React from "react";
import Table from "./Table";

class Container extends React.Component {
  render() {
    return (
      <div className="Jumbotron">
        <h2>Employees</h2>
        <Table />
      </div>
    );
  }
}

export default Container;
