import { generateEmployees } from "./Employees.js"

const mainElement = document.getElementById("container")

const render = async () => {

    const employeeHTML = await generateEmployees()

    const composedHTML = `
    <h1>Three Blind Mice Consulting</h1>
    <h2>Employees:</h2>
    <section class="employeelist">
    ${employeeHTML}
    </section>


    `

    mainElement.innerHTML = composedHTML
}

render()