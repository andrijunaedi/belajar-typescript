/**
 * * Type Parameter in Generic Constraint
 * ? Generic extends ke generic sebelumnya
 */
function getProperty<T, U extends keyof T>(obj: T, key: U): T[U] {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, 'a'));
console.log(getProperty(x, 'd'));

// ! Error jika key tidak ada
// console.log(getProperty(x, 'z'));
