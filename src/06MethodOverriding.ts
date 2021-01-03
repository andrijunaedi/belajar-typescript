class Animal6 {
  breathing(): void {
    console.log('Sedang bernafas');
  }
}

class Cat extends Animal6 {
  /**
   * * Method Overriding
   * ? Method child akan menimpa method parent (Animal6)
   * ? Terjadi apabila nama method childe dan parent sama
   */
  breathing(): void {
    console.log('Bernafas');
  }
}

const kucing = new Cat();
kucing.breathing();
