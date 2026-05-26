// encapsulation is an abtribute of OOP, it will limit the fields and the methods just inside the class and hide it away
// the user just know how it works, but they doesn't know what inside it
// the field with private access modifier below was hided, so you must change or want to know it by only through set and get methods 
// Encapsulation is an attribute of OOP. It keeps fields hidden inside the class.
// Users only need to know how to use the object, not how its internal data is stored.
// Private fields cannot be accessed directly from outside the class.
// If you want to read or change them, you should use getter and setter methods.
class Engine{
    private _engineNumber: number;
    private _engineName: string;
    
    constructor(engineNumber:number, engineName: string){
        this._engineNumber = engineNumber
        this._engineName = engineName
    }
    // get and set methods
    public get engineNumber(): number {
        return this._engineNumber;
    }
    public set engineNumber(value: number) {
        this._engineNumber = value;
    }
    public get engineName(): string {
        return this._engineName;
    }
    public set engineName(value: string) {
        this._engineName = value;
    }
    // methods
    run(){
        console.log(`engine ${this._engineNumber} named ${this._engineName} is running` );
    }
}
let M9 = new Engine(1000,"M9 engine")
// set get methods used as properties (ts did it)
M9.engineName = "M10"
M9.engineNumber = 2000
// This would be possible if _engineName was public.
// But because _engineName is private, you can only access it through getter and setter methods.
// M9._engineName = "M11" // Property '_engineName' is private and only accessible within class 'Engine'.
M9.run()