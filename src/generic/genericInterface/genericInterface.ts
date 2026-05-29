interface UserData {
    id: string,
    name: string,
    email: string,
}

interface UserDataGeneric<T, U, Y> {
    id: T,
    name: U,
    email: Y,
}

// Using a fixed interface.
// TypeScript knows that `data` is an array of UserData,
// so array methods such as map, filter, forEach can be used safely.
//
// Note:
// - This only provides type checking at compile time.
// - It does NOT validate the actual data returned from the API at runtime.
    
// const loadData = async () => {
//     const res = await fetch(`http://localhost:3000/users`) // type: Response
//
//     const data = await res.json() as UserData[]
//
//     data.forEach((user) => {
//         console.log(user)
//     })
// }


// Using a generic interface.
// Generic allows the same object structure to be reused
// with different property types.
//
// In this example:
// UserDataGeneric<string, string, string>
// is equivalent to:
//
// {
//   id: string
//   name: string
//   email: string
// }
//
// Generic is useful when you want to create multiple variations
// of the same data shape (e.g. id can be string or number).
//
// Like the previous example, TypeScript only checks types
// during development and does not validate API response data at runtime.

const loadData = async () => {
    const res = await fetch(`http://localhost:3000/users`) // type: Response

    // Two equivalent ways to tell TypeScript the expected type
    const data: UserDataGeneric<string, string, string>[] = await res.json()

    // const data = await res.json() as UserDataGeneric<string, string, string>[]

    data.forEach((user) => {
        console.log(user)
    })
}

loadData()