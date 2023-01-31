// Instructions can be found in rest_parameters.md

export function add(...numbers) {
  let sum = 0;
  for (let n of numbers) sum += n;
  return sum;
}


