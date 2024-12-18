function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: both arguments are numbers
console.log(result); 

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA + numB;
}

let result2 = addSafe(1, "2"); // Correct: Handles string and numbers
console.log(result2); 