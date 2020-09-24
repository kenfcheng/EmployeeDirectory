import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./Components/Search";
import NavBar from "./Components/NavBar";
import Container from "./Components/Container";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Search />
      </div>
      <Container />
    </div>
  );
}

export default App;
