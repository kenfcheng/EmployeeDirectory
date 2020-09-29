import React from "react";

const Api = () => {
  fetch("https://randomuser.me/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "First Name",
      gender: "Gender",
      username: "Username",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("ERROR"));
};

export default Api;
