import React from "react";
import NavBar from "./NavBar.css";
import Search from "./Search.js";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo bold">Employee Directory</div>
      <div className="description">
        <div className="searchEmployee">Search Employee</div>
        <Search />
      </div>
    </div>
  );
};

export default NavBar;
