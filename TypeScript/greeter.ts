class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = {firstName: "Jane", lastName: "User"}
console.log(greeter(user));

var user2 = new Student("Jane", "M.", "User");
console.log(user2);

