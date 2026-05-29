// With normal functions, you often write one function per type.
function checkNumber(num: number) {
    return num // return number
}

function checkString(data: string) {
    return data // return string
}

// With a generic function, one function can keep the same type it receives.
// This is compile-time type safety, not runtime validation.
function checkType<T>(value: T) {
    return value // return T
}

// How to use it?
const test1 = checkType<string>("Duc Huy")
console.log(test1)
console.log(typeof (test1)) // string

const test2 = checkType<number>(29)
console.log(test2)
console.log(typeof (test2)) // number

// TypeScript can also infer the generic type, so this is still a string.
const test3 = checkType("TypeScript")
console.log(test3)
console.log(typeof (test3)) // string

// When should you use it?
// Example: get the first item of an array and preserve that item's type.
const arr1 = [1, 2, 3]

function getFirstAny(arr: any[]) {
    return arr[0]
}

const test4 = getFirstAny(arr1) // return type is any, so TypeScript cannot protect the type
console.log(`value: ${test4} type: ${typeof (test4)}`)

function getFirstItem<T>(arr: T[]) {
    return arr[0]
}

const test5 = getFirstItem(arr1) // TypeScript knows this is number
console.log(`value: ${test5} type: ${typeof (test5)}`)

const arr2 = ["Duc", "Huy"]
const test6 = getFirstItem(arr2) // TypeScript knows this is string
console.log(`value: ${test6} type: ${typeof (test6)}`)

// const wrong: string = getFirstItem(arr1)
// Error: Type 'number' is not assignable to type 'string'.
