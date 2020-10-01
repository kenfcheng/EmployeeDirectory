import React from "react";
import button from "../Styles/ButtonStyle.css";

function Button({ children }) {
  return <button className={button}>{children}</button>;
}

export default Button;
