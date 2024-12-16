import { generateEmployees } from "./Employees.js"

const mainElement = document.getElementById("container")

const render = async () => {

    const employeeHTML = await generateEmployees()

    const composedHTML = `
    <h1>Three Blind Mice Consulting</h1>

    <section>
    <h2>Employees:</h2>
    ${employeeHTML}
    </section>
    `

    mainElement.innerHTML = composedHTML
}

render()