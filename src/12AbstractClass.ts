/**
 * * Abstract Class
 * ? class yang tidak bisa langsung di init
 * ? class ini harus di inheritance (wariskan)
 * ? method abstract harus ada pada child
 */
abstract class Animal12 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log('Sedang makan');
  }

  abstract move(): void;
}

class Cat12 extends Animal12 {
  constructor() {
    super('Kucing');
  }

  move(): void {
    console.log('Kucing berjalan');
  }
}

class Bird12 extends Animal12 {
  constructor() {
    super('Burung');
  }

  move(): void {
    console.log('Burung terbang');
  }
}

const kucing = new Cat12();
kucing.move();
