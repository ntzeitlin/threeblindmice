async function getEndpoint(endpoint) {
    const url = `http://localhost:3000/${endpoint}`
    const response = await fetch(url)
    return await response.json()
}

export const fetchData = async () => {
    return await getEndpoint("employees")
}