import React from "react";
import Search from "./Search";
import NavBar from "./Styles/NavBar";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo bold">Employee Directory</div>
      <div className="description">
        <div className="searchEmployee bold">Search Employee</div>
        <Search />
      </div>
    </div>
  );
};

export default NavBar;
