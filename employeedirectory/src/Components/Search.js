import React, { useState, useContext } from "react";
import userContext from "../Utils/userContext";

function Search() {
  const [search, setSearch] = useState("");
  const { userName, setUserNameDisplay } = useContext(userContext);
  const { email, setEmailDisplay } = useContext(userContext);
  const { name, setNameDisplay } = useContext(userContext);

  function updateSearch({ target }) {
    // Filters user's search by "Name" "Email" "UserName"
    const searchName = target.value;
    setSearch(searchName);
    const filterName = name.filter(function (name) {
      return name.first.toLowerCase().indexOf(searchName.toLowerCase());
    });
    setNameDisplay([...filterName]);
    updateSearch(name);

    const searchEmail = target.value;
    setSearch(searchEmail);
    const filterEmail = email.filter(function (email) {
      return email.toLowerCase().indexOf(searchEmail.toLowerCase());
    });
    setEmailDisplay([...filterEmail]);
    updateSearch(email);

    const searchUserName = target.value;
    setSearch(searchUserName);
    const filterUserName = userName.filter(function (userName) {
      return userName.toLowerCase().indexOf(searchUserName.toLowerCase());
    });
    setUserNameDisplay([...filterUserName]);
    updateSearch(userName);
  }

  return <input type="text" onChange={updateSearch} value={search}></input>;
}

export default Search;
