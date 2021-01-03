class Animal {
  name: string = '';
  feet: number = 0;

  breathing(): void {
    console.log('Bernafas');
  }
}

/**
 * * Inheritance
 * ? Cat mewarisi / bisa mengakses semua property dan method dari parent (Animal)
 */
class Cat extends Animal {
  color: string = 'orange';
}

const kucing = new Cat();
kucing.name = 'Ciko';
kucing.feet = 4;
kucing.color = 'abu';

console.log(kucing);
kucing.breathing();
