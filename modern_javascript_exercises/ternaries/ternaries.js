// Instructions can be found in ternaries.md

export function sayHello(name) {
  // if (name === undefined) {
  //   return "Hello you!";
  // } else return "Hello, " + name + "!";
  const result =  name  ? name : "you";
  console.log(result);
  return `Hello, ${result}!`;
}

// const greeting = (person) => {
//   const name = person ? person.name : "stranger";
//   return `Howdy, ${name}`;
// }
