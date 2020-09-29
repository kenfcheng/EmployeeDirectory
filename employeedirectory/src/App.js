import React from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";

const App = () => {
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

  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default App;
