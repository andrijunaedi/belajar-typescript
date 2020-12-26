class Animal3 {
  /**
   * * Property
   * ? Variable yang ada didalam class
   */
  name: string = '';
  feet: number = 0;
  mammals: boolean = false;

  /**
   * * Method
   * ? Function yang ada didalam class
   */
  breathe() {
    console.log(`${this.name} sedang bernafas`);
  }
}

/**
 * * Init class Animal
 */
let animal3 = new Animal3();
console.log(animal3);

/**
 * * Update property animal3
 */
animal3.name = 'frog';
animal3.feet = 4;
console.log(animal3);

/**
 * * Use method breathe in class Animals3
 */
animal3.breathe();
