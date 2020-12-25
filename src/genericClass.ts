/**
 * * Generic Class
 * ? Type data pada class dinamis tergantung pada saat inisialisasi kelas
 */

class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(value: T) {
    this.data.push(value);
  }

  addMultiple(...elements: T[]) {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

/**
 * * Membuat List Number
 */
let numbers = new List<number>(1, 2, 3);
numbers.add(4);
numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll());

/**
 * * Membuat List Number atau String
 */
let random = new List<number | string>(1, 'a', 'b', 2);
random.add('c');
random.addMultiple(3, 'd');
console.log(random.getAll());
