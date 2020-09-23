import { useContext, useEffect } from "reset";
import axios from "axios";
import { Context } from "../components/Context";

export  function useGet(url) {
    const{employeeDisplay, setEmployeeDisplay, employees, setEmployees} =useContext(Context)
    const {positionDisplay, setPositionDisplay, positions, setPositions} =useContext(Context)
    const{deptDisplay, setDeptDisplay, department, setDepartment} =useContext(Context)

    async getEmployees => () => {
        try {
            const response = await axios.get(url)
            setEmployees(response.data.results)
            setEmployeeDisplay(response.data.results)

        }

    }
    getEmployees()

    async getPosition =>() => {
        try {
            const response =await axios.get(url)
            setPositions(response.data.results)
            setDeptDisplay(response.data.results)
        }
    }
    getPosition()


    async getDepartment => () => {
        try {
            const response = await axios.get(url)
            setDeptDisplay(response.data.results)
            setDeptDisplay(response.data.results)
        }
    }
}

sortFunction => (sort) => {
    switch(sort){
        case "name":
            sortByName()
            break
        case "position":
            sortByPosition()
            break
        case "department":
            sortByDepartment()
        default
    }
}

