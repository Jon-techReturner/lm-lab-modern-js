// Instructions can be found in rest_parameters.md

function add(...numbers) {
  let sum = 0;
  for (let n of numbers) sum += n;
  return sum;
}

// add(1, 2, 3, 4, 5);

// module.exports = add;
