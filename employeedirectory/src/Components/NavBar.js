import React from "react";

import { BarStyle, logo } from "../Styles/NavStyle.css";

const NavBar = () => {
  return (
    <div className={BarStyle}>
      <h1 className={logo}>Employee Directory</h1>
    </div>
  );
};

export default NavBar;
