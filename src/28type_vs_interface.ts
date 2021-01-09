/**
 * * Type vs Interface
 *
 * ? Kapan harus menggunakan Interface ?
 * * Jika ingin membuat object baru atau method dari sebuah object
 * * Guanakan interface untuk class
 *
 * ? Kapan harus menggunakan Type ?
 * * Gunakan type untuk variable atau function
 */

/**
 * * Type bisa langsung dan object type
 * ? Interface hanya bisa object type
 */
type Phone = string;
type PC = number;

type BBB = {
  name: string;
};

interface AAA {
  name: string;
}

/**
 * * Interface bisa di merge
 * ? Type tidak bisa
 */
interface Dinosaurs {
  name: string;
}
interface Dinosaurs {
  weight: number;
}

//* Implements Interface
class Dino implements Dinosaurs {
  name: string;
  weight: number;
}

type Dinos = {
  name: string;
};
//! Error duplicate identifier
/* type Dinos = {
    weight: number;
} */

/**
 * * Interface bisa implements and extends class dengan mudah
 * ? Type bisa merge (Interception)
 */
type Name = {
  name: string;
};
type Age = {
  age: number;
};

//? Interception
type Employee1 = Name & Age;

//? Union
type Employee2 = Name | Age;

//* Use Type
const employee: Employee1 = {
  name: 'Andri',
  age: 18,
};

const employee2: Employee2 = {
  name: 'Andri',
};
