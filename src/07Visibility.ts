/**
 * * Visibility
 * ? Digunakan untuk membatasi akses property pada class
 *
 * ? public     = diakses dan dipakai dari mana saja
 * ? protected  = diakses oleh class itu sendiri dan turunannya
 * ? private    = diakses oleh class itu sendiri
 */

class Animal7 {
  public name: string;
  private feet: number;
  protected mammals: boolean;

  constructor(name: string, feet: number, mammals: boolean) {
    this.name = name;
    this.feet = feet;
    this.mammals = mammals;
  }
}

class Cat7 extends Animal7 {
  private color: string = 'orange';

  /**
   * * Tidak bisa mengakses property feet
   */
  getColor(): void {
    console.log(this.color);
  }
}

const kucing = new Cat7('Ciko', 4, true);
/**
 * * Tidak bisa mengakses propety color pada class Cat7
 */
