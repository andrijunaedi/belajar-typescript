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

  setName(value: string): void {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }
}

let member = new User('Andri', 18);
console.log(member);

/**
 * * Inheritance
 * ? public     = bisa diakses di semua class / dari luar class
 * ? protected  = hanya bisa diakses dari class tersebut, dan class turunannya
 * ? private    = hanya bisa diakses dari class itu sendiri
 */

/**
 * * Class Admin
 * ? Menggunakan keyword extends
 * ? Mewarisi semua sifat dan method dari class User
 */
class Admin extends User {
  read: boolean = true;
  write: boolean = true;

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

let admin = new Admin('Diky', 18);
admin.getName();
admin.getRole();
admin.setName('Rahman');
