/*
* Generic Biasa 

function generic24<T>(arg: T): T {
  ! ini akan error
  // console.log(arg.length)
  return arg;
}
*/

/**
 * * Generic Constraint
 * ? Menampilkan beberapa option pada type yang diinputkan pada Generic
 */
interface Length {
  length: number;
}

function generic24<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const valueA = generic24('ajdajd');
console.log(valueA);

// * Mengakali jika value number
const valueB = generic24({ length: 3, value: 200 });
console.log(valueB);
