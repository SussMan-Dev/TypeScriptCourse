// fetch API is a way to get data from an API.
// It can send requests with methods like GET, POST, PUT, DELETE,...

// User is a type alias that describes the structure
// of objects inside the array returned from the API.

// async/await always returns a Promise.
// You can use .then() or await to handle the returned data.

let url: string = `http://localhost:3000/users`

type user = {
    id: string,
    name: string,
    email: string
}

const load = async (url: string): Promise<user[]> => {
    let response = await fetch(url)

    let data: user[] = await response.json()

    return data
}

console.log(load(url))