
const firstName = "SARO";
const lastName = "SHYAKA Arlene";
const birthYear = 2001;
const thisYear = 2023;

const age = thisYear - birthYear;
const fullName = firstName + " " + lastName;
const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

console.log(greeting);
export default {
  testGroup: "b",
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName,
  fullName,
  age
};

