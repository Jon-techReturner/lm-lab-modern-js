// Instructions can be found in let_vs_var.md

// Problems with var

function count() {
  for (let i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
}

count(); // <---- uncomment me!

// Another problem with var is that we can overwrite it, like this:

let greeting = "Hello 😘";

console.log(greeting) // <----- uncomment me!
