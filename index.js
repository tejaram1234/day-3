 // Define the "person" object
let person = {
  name: "Tejaram",
  age: 22,
  email: "ramakkupalli@gmail.com",
  hobbies: ["coding", "reading"]
};

// Display the entire object
console.log(person);

// Add a new property using dot notation
person.location = "Srikalahasti";

// Update a property using square bracket notation
person["email"] = "atr.atrj7893@gmail.com";

// Define a nested "family" object
person.family = {
  mother: { name: "gopamma", age: 45 },
  father: { name: "Manohar", age: 52 },
  siblings:  { name: "Devilal", age: 26 },
};

// Display the entire object including the nested "family" object
console.log(person);

// Define a "greet" function and assign it as a method of the "person" object
person.greet = function(name) {
  console.log(`Hello ${name}, my name is ${this.teja}. Nice to meet you!`);
};

// Shallow clone the "person" object
let clonedPerson = Object.assign({}, person);

// Display both the original and cloned objects
console.log(person);
console.log(clonedPerson);

// Deep clone the "person" object using JSON.parse() and JSON.stringify()
let deepClonedPerson = JSON.parse(JSON.stringify(person));

// Display both the original and cloned objects
console.log(person);
console.log(deepClonedPerson);

// Display the keys, values, and key-value pairs of the "person" object
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
