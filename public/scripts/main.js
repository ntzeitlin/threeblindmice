import { createEmployeeList } from "./employees.js"

const targetElement = document.getElementById("container")
const employeeData = createEmployeeList()

targetElement.innerHTML = employeeData