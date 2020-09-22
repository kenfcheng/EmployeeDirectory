import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div>
        <Search />
      </div>
    </div>
  );
}

export default App;
