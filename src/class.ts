/**
 * * Class
 */
export class User {
  public name: string;

  /**
   * * Teknik penulisan params pada constructor
   * @param name ini mendelarasikan public diatas, code jadi lebih panjang
   * @param age ini menuliskan public langsung di parameter constructor
   */
  constructor(name: string, public age: number) {
    this.name = name;
  }
}

let member = new User('Andri', 18);
console.log(member);
