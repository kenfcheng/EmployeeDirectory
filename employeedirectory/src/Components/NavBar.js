import React from "react";
import Search from "./Search";
import { BarStyle, logo } from "../Styles/NavStyle.css";

const NavBar = () => {
  return (
    <div className={BarStyle}>
      <div className={logo}>Employee Directory</div>
      <div className="description">
        <div className="searchUser bold">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
