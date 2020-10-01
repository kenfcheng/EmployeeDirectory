import React, { useState, useContext } from "react";
import { userContext } from "../Utils/userContext";

function Search() {
  const [search, setSearch] = useState("");
  const { userName, setUserNameDisplay } = useContext(userContext);
  const { email, setEmailDisplay } = useContext(userContext);
  const { name, setNameDisplay } = useContext(userContext);

  function updateSearch({ target }) {
    // Filters user's search by "Name" "Email" "UserName"
    const searchName = target.value;
    setSearch(searchQuery);
    const filterName = name.filter(function (name) {
      return name.first.toLowerCase().indexOf(searchName.toLowerCase());
    });
    setNameDisplay([...filterName]);

    const searchEmail = target.value;
    const filterEmail = email.filter(function (email) {
      return email.toLowerCase().indexOf(searchEmail.toLowerCase());
    });
    setEmailDisplay([...filterEmail]);

    const searchUserName = target.value;
    const filterUserName = userName.filter(function (userName) {
      return userName.toLowerCase().indexOf(searchUserName.toLowerCase());
    });
    setUserNameDisplay([...filterUserName]);
  }

  return <input type="text" onChange={updateSearch} value={search}></input>;
}

export default Search;
