// Intersection Type in TypeScript
// Intersection (&) is used to combine multiple types into one
// The new type will contain all properties from the combined types

// Type for user account information
type User = {
    name: string,
    password: string,
}

// Type for detailed personal information
type Detail = {
    phoneNumber: string,
    location: string,
    age: number,
}

// Intersection Type
// UserInfo will include all properties from both User and Detail
type UserInfo = User & Detail

// Creating an object based on the UserInfo type
let user1: UserInfo = {
    name: "Duc Huy",
    password: "123",
    phoneNumber: "0905",
    location: "VN",
    age: 20
}

// Print the object to the console
console.log(user1)