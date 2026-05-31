// this way, you need to declare which is type of T
interface DefaultGeneric<T = string>{
    data: T
}
const user01: DefaultGeneric = {
    data: "Hello"
};
// T mặc định là string

const user02: DefaultGeneric<number> = {
    data: 123
};
// T là number