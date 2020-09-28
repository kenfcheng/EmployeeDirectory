import React from "react";
// import Search from "./Search";
import NavBarStyle from "./Styles/NavBarStyle";

const NavBar = () => {
  return (
    <div className="navBar" style={NavBarStyle}>
      <div className="logo bold">Employee Directory</div>
      <div className="description">
        <div className="searchEmployee bold">Search Employee</div>
      </div>
    </div>
  );
};

export default NavBar;
