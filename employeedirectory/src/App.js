import React from "react";
// import API from "./Utils/Api";
// import Container from "./Components/Container";
import Footer from "./Components/Footer";

import NavBar from "./Components/NavBar";
import Wrapper from "./Components/Wrapper";

// import AppStyle from "./Styles/AppStyle";

const App = () => {
  // const [name, setName] = useState([]);
  // const [email, setEmail] = useState([]);
  // const [userName, setUserName] = useState([]);

  // useEffect(() => {
  //   loadUser();
  // }, []);

  // const loadUser = () => {
  //   API.getUserList;
  // };

  return (
    <div>
      <Wrapper />
      <NavBar />

      <Footer />
      <Wrapper />
    </div>
  );
};

export default App;
