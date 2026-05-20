// Type Assertion is used when you know more specific type information
// than TypeScript does.
//
// document.getElementById() only returns HTMLElement | null,
// so TypeScript does not know whether the element is an
// input, button, div, etc.
//
// HTMLInputElement has a `value` property,
// but HTMLElement does not.
//
// Therefore, we use type assertion to tell TypeScript:
// "Trust me, this element is an input element."

let clickBtn = document.getElementById("clickBtn");

clickBtn?.addEventListener("click", () => {
    let data = document.getElementById("userId") as HTMLInputElement;

    console.log(data.value);
});

// When fetching data from an API,
// the response is usually JSON data.
//
// JSON.parse() converts JSON string into a JavaScript object.
//
// However, TypeScript still does not know
// the exact shape of that object.
//
// So we use type assertion to tell TypeScript:
// "This object has the type UserInformation."

type UserInformation = {
    name: string;
    age: number;
};

const response = '{"name":"An","age":20}';

const user = JSON.parse(response) as UserInformation;

console.log(user.name);
console.log(user.age);


// Example: API returns an array of users

// JSON string from API
const response1 = `
[
    { "name": "An", "age": 20 },
    { "name": "John", "age": 25 },
    { "name": "Lisa", "age": 22 }
]
`;

// Tell TypeScript that parsed data is an array of UserInformation
const users = JSON.parse(response1) as UserInformation[];

console.log(users);