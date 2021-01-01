class Animal5 {
  name: string;
  feet: number;

  constructor(name: string, feet: number) {
    this.name = name;
    this.feet = feet;
  }
}

class Frog extends Animal5 {
  poisonous: boolean;

  constructor(name: string, feet: number, poisonous: boolean) {
    /**
     * * Super Constructor
     * ? Menjalankan constructor parent (Animal)
     * ? Constructor diisi oleh parameter name dan feet
     */
    super(name, feet);
    this.poisonous = poisonous;
  }
}

const frog = new Frog('katak', 4, false);
console.log(frog);
