class Animal4 {
  /**
   * * Property
   */
  name: string;
  feet: number;

  /**
   * * Constructor berfungsi untuk mengisi nilai awal pada property name dan feet
   * @param name
   * @param feet
   */
  constructor(name: string, feet: number) {
    this.name = name;
    this.feet = feet;
  }
}

const bird = new Animal4('Bird', 2);
console.log(bird);

/**
 * * Shorthand Constructor
 * ? Menuliskan property langsung pada parameter constructor
 */
class AnimalShort {
  constructor(public name: string, public feet: number) {}
}

const cat = new AnimalShort('Kocheng', 4);
console.log(cat);
