import React from "react";

const userContext = React.createContext({
  name: "",
  email: "",
  username: "",
  // handleBtnClick: () => {}
});

export default userContext;
