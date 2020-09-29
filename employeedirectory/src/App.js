import React from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Api from "./Utils/Api";

const App = () => {
  return (
    <div>
      <Header />
      <Container />
      {Api}
      <Footer />
    </div>
  );
};

export default App;
