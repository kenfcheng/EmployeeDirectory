import React, { Component } from "react";
import Container from "./Components/Container";
import { AppHeader } from "./AppStyle.css";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <div className={AppHeader}>
          <Header />
        </div>
        <div className="jumbotron">
          <Container />
        </div>
      </div>
    );
  }
}

export default App;
