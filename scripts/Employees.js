// component function to generate the Employee List with their laptops

import { getData } from "./Data.js"

export const generateEmployees = async () => {
    const employees = await getData("employees?_expand=computer")

    let employeeListHTML = "<ul>"

    employeeListHTML += employees.map(({ id: id, firstName: firstN, lastName: lastN, computer: { model: model, year: year } }) => `
    <div><li>${firstN} ${lastN} uses a ${year} ${model}</li></div>
    ` ).join("")
    return employeeListHTML
}    