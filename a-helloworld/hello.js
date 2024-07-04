// just the same to javascript
function hello(name) {
    return "hello, " + name;
}
// give name a string type
function hello1(name) {
    return "hello, " + name;
}
// after compile: tsc hello.ts, then you will get a hello.js file
var user = "hank";
console.log(hello(user));
console.log(hello1(user));
function greetter(user) {
    return "hello, " + user.firstName + " " + user.lastName;
}
var user1 = { firstName: "hank", lastName: "mo" };
console.log(greetter(user1));
// oop
var Student = /** @class */ (function () {
    // public indicates the same name property in class
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter1(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var hank = new Student("hank", "", "mo");
greeter1(hank);
