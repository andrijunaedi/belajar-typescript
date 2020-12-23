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
  phone: string;
  private _email: string = '';

  /**
   * * Static Property
   * ? Property yang bisa langsung diakses tanpa perlu inisialisasi
   */
  static getNameRole: string = 'Admin';

  /**
   * * Super Constructor
   * ? Berguna untuk menambahkan parameter baru pada class child ( Admin )
   * ? Memanggil constructor dari parent class ( User )
   * @param phone ini parameter yang ditambahkan di class Admin
   * @param name parameter dari class User
   * @param age parameter dari class User
   */
  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  /**
   * * Setter
   * ? Berfungsi untuk mengatur (set) dan validasi data email
   */
  set email(value: string) {
    if (value.length < 5) {
      this._email = 'Email Salah';
    } else {
      this._email = value;
    }
  }

  /**
   * * Getter
   * ? Berfungsi untuk mendapatkan (get) data email
   */
  get email(): string {
    return this._email;
  }

  /**
   * * Static Method
   * ? Method yang bisa langsung diakses tanpa perlu inisialisasi
   */
  static hello(): string {
    return 'Hello admin tamvan';
  }
}

let admin = new Admin('081236253', 'Diky', 18);
admin.getName();
admin.getRole();
admin.setName('Rahman');
admin.phone;

/**
 * * Set (mangatur) email admin
 * * Get (mengakses) email admin
 */
admin.email = 'admin@andri.com';
console.log(admin.email);

/**
 * * Property bisa langsung diakses tanpa insialisasi (new)
 */
console.log(Admin.getNameRole);
console.log(Admin.hello());
