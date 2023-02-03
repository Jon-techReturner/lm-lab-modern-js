// Instructions can be found in ternaries.md

export function sayHello(name) {
  const result =  name  ? name : "you";
  console.log(result);
  return `Hello, ${result}!`;
}