import React {useState} from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Search from "./Components/Search";
import NavBar from "./Components/NavBar";
import Container from "./Components/Container";

export default function App() {
  // API for directory
  const [resourceType, setResourceType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  
  
  // Fetches the API from randomuser
  useEffect(() => {
    fetch(`https://randomuser.me/api/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);

  return (
    <div className="App">
      <NavBar />
      {/* <div>
        <Search />
      </div> */}
      <div>
        {resourceType}
        {name.first.map((name) => {
          return <pre>{JSON.stringify(name)}</pre>;
        })}
        ,
        {email.map((email) => {
          return <pre>{JSON.stringify(email)}</pre>;
        })}
        ,
        {username.map((username) => {
          return <pre>{JSON.stringify(username)}</pre>;
        })}
        <Container />
      </div>
    </div>
  );
}
