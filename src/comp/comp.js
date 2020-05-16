// # The following list comprehension exercises will make use of the
// # defined Human class.

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return `${this.name}, ${this.age}`;
  }
}

humans = [
  new Human("Alice", 29),
  new Human("Bob", 32),
  new Human("Charlie", 37),
  new Human("Daphne", 30),
  new Human("Eve", 26),
  new Human("Frank", 18),
  new Human("Glenn", 42),
  new Human("Harrison", 12),
  new Human("Igon", 41),
  new Human("David", 31),
];

console.log("Starts with D:");
var arr = [];
for (let human of humans) {
  if (human.name[0] === "D") {
    arr.push(human.name);
  }
}
console.log(arr);

console.log("Starts with E:");
var arr2 = [];
for (let human of humans) {
  if (human.name.slice(-1) === "e") {
    arr2.push(human.name);
  }
}
console.log(arr2);

console.log("Starts between C and G, inclusive:");
var letters = ["C", "D", "E", "F", "G"];
var arr3 = [];
for (let human of humans) {
  arr3.push(human.name);
}
arr3.map((el) => {
  if (letters.includes(el[0].toUpperCase())) {
    console.log(el);
  }
});

console.log("Ages plus 10:");
for (let human of humans) {
  console.log(human.age + 10);
}

console.log("Name hyphen age:");
for (let human of humans) {
  console.log(`${human.name}-${human.age}`);
}

console.log("Names and ages between 27 and 32:");
for (let human of humans) {
  if (human.age > 27 && human.age < 32) {
    console.log(`(${human.name}, ${human.age})`);
  }
}

console.log("All names uppercase:");
for (human of humans) {
  console.log(`${human.name.toUpperCase()}, ${human.age + 10}`);
}

console.log("Square root of ages:");
for (human of humans) {
  console.log(Math.sqrt(human.age));
}
