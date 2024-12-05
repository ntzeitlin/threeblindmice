import { fetchData } from "./data.js";
const employees = await fetchData()

export const createEmployeeList = () => {
    return `<ul>${employees[0].firstName}</ul>`
}