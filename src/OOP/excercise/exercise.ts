// class user, the person who can be a student or even teacher in our system
class Users{
    public name:string;
    private _email: string;
    protected role: "student" | "teacher";
    
    //constructure
    constructor(name:string, email:string, role?: "student"|"teacher"){
        this.name = name;
        this._email = email;
        this.role = role ? role : "student"
    }
    //methods
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public printUserInfo(){
        console.log(`[${this.role}]${this.name} - ${this.email}`); 
    }
}
// class teacher, they are a normal user with they created a course for a student
//1. inheritance method 
class Teacher extends Users{
    // teacher's course
    public courses: string[];
    // constructor with input to know that they are teachers
    constructor(name:string,email:string){
        super(name,email,"teacher")
        this.courses = []
    }

    addCourse(courseName:string):void{
        this.courses.push(courseName)
    }
    //2. polymorphism method
    override printUserInfo(): void {
        super.printUserInfo();
        console.log(`Courses: ${this.courses.join(", ")}`);
    }
}

class Learner extends Users{
    public enrolledCourse: string[];
    constructor(name:string, email:string){
        super(name,email,"student")
        this.enrolledCourse = []
    }
    enroll(courseName:string):void{
        this.enrolledCourse.push(courseName)
    }
    override printUserInfo(): void {
        super.printUserInfo()
        console.log(`enrolled Course: ${this.enrolledCourse.join(",")}`);
    }
}
const client = new Users("Duc Huy","huyantv@gmail.com")
const teacher = new Teacher("Van Truong","vantruong@gmail.com")
const leaner = new Learner("Van An", "an@gmail.com")
//leaner enroll course
leaner.enroll("IE2")
// teacher add course
teacher.addCourse("IE2")
// print infomation
leaner.printUserInfo()
teacher.printUserInfo()
client.printUserInfo()