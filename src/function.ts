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

/**
 * * Function as Type
 * ? Melakukan standarisasi (rule) type data pada function
 */
type Tambah = (val1: number, val2: number) => number;

/**
 * * Function Add use type Tambah
 * ? Function yang harus menyertakan semua value sesuai dengan type Tambah
 * ! Error jika type selain number dan tidak ada return number
 * @param val1 hanya bisa diisi number
 * @param val2 hanya bisa diisi number
 */
const Add: Tambah = (val1: number, val2: number): number => val1 + val2;

/**
 * * Default Parameter
 * ? Menetapkan nilai awal untuk parameter last
 * @param first string wajib diisi
 * @param last string ini bersifat opsional
 */
const fullName = (first: string, last: string = 'Junaedi'): string => {
  return `${first} ${last}`;
};
console.log(fullName('Andri'));
console.log(fullName('Diky', 'Rahman'));
