import React from "react";
import Search from "./Search";
import NavStyle from "./NavStyle.css";

const NavBar = () => {
  return (
    <div className="NavStyle">
      <div className="logo bold">Employee Directory</div>
      <div className="description">
        <div className="searchEmployee bold">
          <Search />{" "}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
