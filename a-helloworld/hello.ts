// just the same to javascript
function hello(name) {
  return "hello, " + name
}

// give name a string type
function hello1(name: string) {
  return "hello, " + name
}

// after compile: tsc hello.ts, then you will get a hello.js file

let user = "hank"
console.log(hello(user))
console.log(hello1(user))

// interface

interface User {
  firstName: string
  lastName: string
}

function greetter(user: User) {
  return "hello, " + user.firstName + " " + user.lastName
}

let user1 = { firstName: "hank", lastName: "mo" }
console.log(greetter(user1))

// oop

class Student {
  fullName: string
  // public indicates the same name property in class
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter1(person: Person) {
  return "hello, " + person.firstName + " " + person.lastName
}

let hank = new Student("hank", "", "mo")
greeter1(hank)
