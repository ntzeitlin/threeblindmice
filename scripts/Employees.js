// component function to generate the Employee List with their laptops

import { getData } from "./Data.js"

export const generateEmployees = async () => {
    const employees = await getData("employees?_expand=computer&_expand=department&_expand=location")
    const customerRelationships = await getData("employeeCustomers?_expand=customer")

    let employeeListHTML = ""

    employeeListHTML += employees.map(
        ({ id: employeeId, firstName: firstN, lastName: lastN,
            computer: { model: model, year: year },
            department: { name: departmentName },
            location: { city: officeCity }
        }) => {

            const relationships = customerRelationships.filter(({ employeeId: id }) => id === employeeId)
            console.log(relationships)
            const assignedCustomers = relationships.map(({ customer: { name: customerName } }) => {
                return `<li>${customerName}</li>`
            }).join("")
            return `
    <div class="employee">
        <header class="employee__name"> 
            <h1>${firstN} ${lastN}</h1>
        </header>
        <section class="employee__computer">
            Currently using a ${year} ${model}
        </section>
        <section class="employee__department">
            Works in ${departmentName} department
        </section>
        <section class="emoployee__location">
            Works at the ${officeCity} office
        </section>
        <section class='employee__customers'>
            Has worked for the following customers:
            <ul>
                ${assignedCustomers}
            </ul>
        </section>
    </div>

    `}

    ).join("")

    return employeeListHTML
}    