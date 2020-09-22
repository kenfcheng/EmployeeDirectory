import React from "react";
import { Context } from "./Components/Context.js";

// Search input
Search = () => {
    const [search, setSearch] = useState('')
    const {employees, employeesDisplayed} = useContext(Context)

    searchUpdate = ({target}) => {
        const inputTerm = target.value
        setSearch(inputTerm)

        const result = employees.filter( function (employee) {
            return employee.name.first.toLowerCase().indexOf(search)
        }

    }
}



export default Search;
