/**
 * * Type data pada return function
 */

/**
 * * return string
 * ? function harus return value string
 * ! error apabila tidak ada return atau return bukan string
 */
function getName(): string {
  return 'Hello I am Andri Junaedi';
}
console.log(getName());

/**
 * * return number
 * ? function harus return value number
 * ! error apabila tidak ada return atau return value bukan number
 */
function getAge(): number {
  return 18;
}

/**
 * * function void
 * ? void tidak akan ada return apa apa
 * ! error jika ada return
 */
function printMe(): void {
  console.log('TS sangat menarik');
}
printMe();

/**
 * * Type data Arguments (parameter)
 * ? Type data dideklariskan diawal pembuatan parameter
 * @param val1 hanya bisi diisi number
 * @param val2 hanya bisa diisi number
 */
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

const result = multiply(5, 10);
console.log(result);
