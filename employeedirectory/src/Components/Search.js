import React from "react";
import { Context } from "./Components/Context.js";

// Search input
Search = () => {
  const [search, setSearch] = useState("");
  const { employees, employeesDisplayed } = useContext(Context);
  const { position, positionDisplayed } = useContext(Context);
  const { department, deptDisplayed } = useContext(Context);

  searchUpdate = ({ target }) => {
    const inputTerm = target.value;
    setSearch(inputTerm);
    // This will live filter text as employee name is entered.
    const result = employees.filter(function (employee) {
      return employee.name.first.toLowerCase().indexOf(search.toLowerCase);
    });
    employeesDisplayed([...filterResult]);
  };

  searchUpdate = ({ target }) => {
    const inputTerm = target.value;
    setSearch(inputTerm);
    const result = position.filter(function (position) {
      return position.name.toLowerCase().indexOf(search.toLowerCase);
    });
    positionDisplayed([...filterResult]);
  };

  searchUpdate = ({ target }) => {
    const inputTerm = target.value;
    setSearch(inputTerm);
    const result = position.filter(function (department) {
      return department.name.toLowerCase().indexOf(search.toLowerCase);
    });
    deptDisplayed([...filterResult]);
  };

  return;
  <input type="text" onChange={updateSearch} value={search}></input>;
};

export default Search;
