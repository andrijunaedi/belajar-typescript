/**
 * * Interface
 * ? Blueprint berarti atribut didalam interface harus ada didalam class yang melakukan implements
 */
interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

/**
 * * class MacBook implements interface Laptop
 * ? Menggunakan keyword implements
 */
class MacBook implements Laptop {
  constructor(public name: string, keyBoardLight: boolean) {}
  on(): void {
    console.log('Nyala');
  }
  off(): void {
    console.log('Mati');
  }
}

class Asus implements Laptop {
  constructor(public name: string, isGaming: boolean) {}
  on(): void {
    console.log('Nyala');
  }
  off(): void {
    console.log('Mati');
  }
}

/**
 * * Example
 */
let mac = new MacBook('MacBook Pro', true);
mac.on();
